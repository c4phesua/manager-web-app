const PageRouter = {
  redirect(link) {
    window.location.href = link;
  },
  currentPath() {
    return window.location.pathname;
  },
}

export default PageRouter;