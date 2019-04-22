export function chain(target, key, descriptor) {
  const func = descriptor.value;

  descriptor.value = function (...args) {
    func.apply(this, args);
    return target;
  };
  return descriptor;
}
