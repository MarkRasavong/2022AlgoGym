function firstOrNull<ItemType>(array: ItemType[]): ItemType | null {
  return array.length === 0 ? null : array[0];
}

console.log(firstOrNull<string>(["Rod", "Jane", "Fred"]));
