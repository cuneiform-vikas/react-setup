const AuthContainer = ({ children, title, subtitle }:any) => {
  return (
    <div className="container">
      <div className="app-container">
        <div className="auth-container">
          <div className="auth-box-left-bg"></div>

          <main className="auth-box-right-form flex-center">
            <div className="auth-box-right__header">
              <h1
                className="title"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
              <p className="subtitle">{subtitle}</p>
            </div>

            <div className="auth-form-wrapper">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
