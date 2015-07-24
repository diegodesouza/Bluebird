AccountsTemplates.configure({
  confirmPassword: true,
  enablePasswordChange: true,
  showLabels: true,
  showPlaceholders: true,
  positiveValidation: true,
  showValidating: true,
  onLogoutHook: function() {
    Router.go('/');
  }
 });


AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('ensureSignedIn');
