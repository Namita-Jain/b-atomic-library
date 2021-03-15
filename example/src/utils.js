const applyCssVars = (vars) => {
  for (let key in vars) {
    document.documentElement.style.setProperty(
      key,
      vars[key]
    )
  }
}

export { applyCssVars }
