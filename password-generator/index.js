

function generatePasswords() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+<>?";
  let pass1 = "";
  let pass2 = "";
  for (let i = 0; i < 15; i++) {
    pass1 += chars.charAt(Math.floor(Math.random() * chars.length));
    pass2 += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("password1").textContent = pass1;
  document.getElementById("password2").textContent = pass2;
}
