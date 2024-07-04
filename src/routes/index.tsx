import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { CommonRoutes } from "./role/CommonRoutes";
import { MainRoutes } from "./role/MainRoutes";
import { AuthRoutes } from "./role/AuthRoutes";
import { AuthState, RouteConfig } from "@/types";

const Router: React.FC = () => {
  const [title, setTitle] = useState<string>("React Set Up");
  const [maintenanceStatus, setMaintenanceStatus] = useState<boolean>(false);
  document.title = title;

  const { maintenance, is_2fa, is_verify }: AuthState = useSelector(
    (state: any) => state.auth,
    shallowEqual
  );

  const token: any = true;

  const privileges: any = {
    // head: ["read", "write", "delete"],
    user_management: ["read", "write", "delete"],
  };

  const role: number = 2;
  const module: RouteConfig[] = role === 1 || role === 2 ? MainRoutes : [];
  console.log("module: ", module);

  useEffect(() => {
    if (maintenance) {
      setMaintenanceStatus(maintenance);
    }
  }, [maintenance]);

  return (
    <>
      {maintenanceStatus ? (
        <Routes>{/* write maintenance route here */}</Routes>
      ) : token && is_2fa !== is_verify ? (
        <Routes>
          {/* <Route path="*" element={<Navigate to="/verify" />} /> */}
          {/* <Route path="/verify" element={<OTP setTitle={setTitle} />} /> */}
        </Routes>
      ) : (
        <Routes>
          {/* ----------------------------------COMMON ROUTES----------------------------------------- */}
          {CommonRoutes?.map((obj, index) => (
            <Route
              key={index}
              path={obj.path}
              element={<obj.component setTitle={setTitle} />}
            />
          ))}

          {/* ----------------------------------ROUTES ACCESSIBLE JUST FOR AUTH ----------------------------------------- */}

          {!token && <Route path="/" element={<Navigate to="/login" />} />}
          {AuthRoutes?.map((obj, index) => (
            <Route
              key={index}
              path={obj.path}
              element={
                !token ? (
                  <obj.component setTitle={setTitle} />
                ) : (
                  <Navigate to={"/"} />
                )
              }
            />
          ))}

          {/* ----------------------------------Role Based Routing----------------------------------------- */}

          {token &&
            module?.map((obj, index): any => (
              <Route
                key={index}
                path={obj.path}
                element={
                  token &&
                  // is_2fa === is_verify &&
                  ((obj.position === "head" && (
                    <obj.component setTitle={setTitle} />
                  )) ||
                    (obj.position === "parent" &&
                      privileges[obj.privilegeTag] &&
                      Object.values(privileges[obj.privilegeTag]).includes(
                        "read"
                      ) && <obj.component setTitle={setTitle} />) ||
                    (obj.position === "child" &&
                      privileges[obj.privilegeTag] &&
                      Object.values(privileges[obj.privilegeTag]).includes(
                        "read" && "write"
                      ) && <obj.component setTitle={setTitle} />) || (
                      <Navigate to="/" />
                    ))
                }
              />
            ))}
        </Routes>
      )}
    </>
  );
};

export default Router;
