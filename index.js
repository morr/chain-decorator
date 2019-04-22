function chain(target, key, descriptor) {
  const func = descriptor.value;

  descriptor.value = function (...args) {
    func.apply(this, args);
    return this;
  };
  return descriptor;
}

export { chain };
export default { chain };
