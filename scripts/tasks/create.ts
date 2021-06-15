function createPackage() {
  // todo 创建library
}

function createPage() {
  // todo 创建页面
}

export function create(name: string, type: string) {
  if (type === "-p") {
    return createPackage();
  }
  return createPage();
}
