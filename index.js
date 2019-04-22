export function chain(target, key, descriptor) {
  const func = descriptor.value;

  descriptor.value = function () {
    func.apply(this, arguments);
    return this;
  };
  return descriptor;
}
