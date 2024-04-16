const {
  map,
  rule,
  writeToProfile,
  mapSimultaneous,
  toKey,
} = require("karabiner.ts");

writeToProfile(
  "Doug",
  [
    rule("Home row mods - option, ctrl, command, shift").manipulators([
      //
      // Four - left hand
      mapSimultaneous(["a", "s", "d", "f"]).toIfHeldDown("l⇧", ["l⌘⌥⌃"]),
      // Four - right hand
      mapSimultaneous(["j", "k", "l", ";"]).toIfHeldDown("r⇧", ["r⌘⌥⌃"]),
      //
      // Three - left hand
      mapSimultaneous(["a", "s", "d"]).toIfHeldDown("l⌘", ["l⌥⌃"]),
      mapSimultaneous(["a", "s", "f"]).toIfHeldDown("l⇧", ["l⌥⌃"]),
      mapSimultaneous(["a", "d", "f"]).toIfHeldDown("l⇧", ["l⌘⌥"]),
      // mapSimultaneous(["s", "d", "f"]).toIfHeldDown("l⌘", ["l⇧⌃"]),
      mapSimultaneous(["s", "d", "f"]).toIfHeldDown("l⇧", ["l⌘⌃"]),
      // mapSimultaneous(["s", "d", "f"]).toIfHeldDown("l⇧", ["l⌃⌘"]),
      // Three - right hand
      mapSimultaneous([";", "l", "k"]).toIfHeldDown("l⌘", ["l⌥⌃"]),
      mapSimultaneous([";", "l", "j"]).toIfHeldDown("l⇧", ["l⌥⌃"]),
      mapSimultaneous([";", "k", "j"]).toIfHeldDown("l⇧", ["l⌘⌥"]),
      // mapSimultaneous(["l", "k", "j"]).toIfHeldDown("l⌘", ["l⇧⌃"]),
      mapSimultaneous(["l", "k", "j"]).toIfHeldDown("l⇧", ["l⌘⌃"]),
      // mapSimultaneous(["l", "k", "j"]).toIfHeldDown("l⇧", ["l⌃⌘"]),
      //
      // Two - left hand
      mapSimultaneous(["a", "s"], { key_down_order: "strict" })
        .toIfAlone("a")
        .toIfAlone("s")
        .toIfHeldDown("l⌥", "l⌃"),
      mapSimultaneous(["s", "a"], { key_down_order: "strict" })
        .toIfAlone("s")
        .toIfAlone("a")
        .toIfHeldDown("l⌥", "l⌃"),
      mapSimultaneous(["a", "d"], { key_down_order: "strict" })
        .toIfAlone("a")
        .toIfAlone("d")
        .toIfHeldDown("l⌥", "l⌘"),
      mapSimultaneous(["d", "a"], { key_down_order: "strict" })
        .toIfAlone("d")
        .toIfAlone("a")
        .toIfHeldDown("l⌥", "l⌘"),
      mapSimultaneous(["a", "f"], { key_down_order: "strict" })
        .toIfAlone("a")
        .toIfAlone("f")
        .toIfHeldDown("l⌥", "l⇧"),
      mapSimultaneous(["f", "a"], { key_down_order: "strict" })
        .toIfAlone("f")
        .toIfAlone("a")
        .toIfHeldDown("l⌥", "l⇧"),
      mapSimultaneous(["s", "d"], { key_down_order: "strict" })
        .toIfAlone("s")
        .toIfAlone("d")
        .toIfHeldDown("l⌃", "l⌘"),
      mapSimultaneous(["d", "s"], { key_down_order: "strict" })
        .toIfAlone("d")
        .toIfAlone("s")
        .toIfHeldDown("l⌃", "l⌘"),
      mapSimultaneous(["s", "f"], { key_down_order: "strict" })
        .toIfAlone("s")
        .toIfAlone("f")
        .toIfHeldDown("l⌃", "l⇧"),
      mapSimultaneous(["f", "s"], { key_down_order: "strict" })
        .toIfAlone("f")
        .toIfAlone("s")
        .toIfHeldDown("l⌃", "l⇧"),
      mapSimultaneous(["d", "f"], { key_down_order: "strict" })
        .toIfAlone("d")
        .toIfAlone("f")
        .toIfHeldDown("l⇧", "l⌘"),
      mapSimultaneous(["f", "d"], { key_down_order: "strict" })
        .toIfAlone("f")
        .toIfAlone("d")
        .toIfHeldDown("l⇧", "l⌘"),
      // Two - right hand
      mapSimultaneous([";", "l"], { key_down_order: "strict" })
        .toIfAlone(";")
        .toIfAlone("l")
        .toIfHeldDown("l⌥", "l⌃"),
      mapSimultaneous(["l", ";"], { key_down_order: "strict" })
        .toIfAlone("l")
        .toIfAlone(";")
        .toIfHeldDown("l⌥", "l⌃"),
      mapSimultaneous([";", "k"], { key_down_order: "strict" })
        .toIfAlone(";")
        .toIfAlone("k")
        .toIfHeldDown("l⌥", "l⌘"),
      mapSimultaneous(["k", ";"], { key_down_order: "strict" })
        .toIfAlone("k")
        .toIfAlone(";")
        .toIfHeldDown("l⌥", "l⌘"),
      mapSimultaneous([";", "j"], { key_down_order: "strict" })
        .toIfAlone(";")
        .toIfAlone("j")
        .toIfHeldDown("l⌥", "l⇧"),
      mapSimultaneous(["j", ";"], { key_down_order: "strict" })
        .toIfAlone("j")
        .toIfAlone(";")
        .toIfHeldDown("l⌥", "l⇧"),
      mapSimultaneous(["l", "k"], { key_down_order: "strict" })
        .toIfAlone("l")
        .toIfAlone("k")
        .toIfHeldDown("l⌃", "l⌘"),
      mapSimultaneous(["k", "l"], { key_down_order: "strict" })
        .toIfAlone("k")
        .toIfAlone("l")
        .toIfHeldDown("l⌃", "l⌘"),
      mapSimultaneous(["l", "j"], { key_down_order: "strict" })
        .toIfAlone("l")
        .toIfAlone("j")
        .toIfHeldDown("l⌃", "l⇧"),
      mapSimultaneous(["j", "l"], { key_down_order: "strict" })
        .toIfAlone("j")
        .toIfAlone("l")
        .toIfHeldDown("l⌃", "l⇧"),
      mapSimultaneous(["k", "j"], { key_down_order: "strict" })
        .toIfAlone("k")
        .toIfAlone("j")
        .toIfHeldDown("l⇧", "l⌘"),
      mapSimultaneous(["j", "k"], { key_down_order: "strict" })
        .toIfAlone("j")
        .toIfAlone("k")
        .toIfHeldDown("l⇧", "l⌘"),
      //
      // One - left hand
      map("a")
        .toIfAlone("a", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("a"))
        .toIfHeldDown("l⌥", {}, { halt: true }),
      map("s")
        .toIfAlone("s", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("s"))
        .toIfHeldDown("l⌃", {}, { halt: true }),
      map("d")
        .toIfAlone("d", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("d"))
        .toIfHeldDown("l⌘", {}, { halt: true }),
      map("f")
        .toIfAlone("f", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("f", {}, { halt: true }))
        .toIfHeldDown("l⇧", {}, { halt: true }),
      // One - right hand
      map(";")
        .toIfAlone(";", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey(";"))
        .toIfHeldDown("l⌥", {}, { halt: true }),
      map("l")
        .toIfAlone("l", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("l"))
        .toIfHeldDown("l⌃", {}, { halt: true }),
      map("k")
        .toIfAlone("k", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("k"))
        .toIfHeldDown("l⌘", {}, { halt: true }),
      map("j")
        .toIfAlone("j", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("j", {}, { halt: true }))
        .toIfHeldDown("l⇧", {}, { halt: true }),
    ]),

    rule("R_U = Meh").manipulators([
      map("r")
        .toIfAlone("r", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("r"))
        .toIfHeldDown("l⇧", "l⌥⌃", { halt: true })
        .parameters({ "basic.to_if_held_down_threshold_milliseconds": 180 }),
      map("u")
        .toIfAlone("u", {}, { halt: true })
        .toDelayedAction(toKey("vk_none"), toKey("u"))
        .toIfHeldDown("l⇧", "l⌥⌃", { halt: true })
        .parameters({ "basic.to_if_held_down_threshold_milliseconds": 180 }),
    ]),
  ],
  {
    "basic.to_if_held_down_threshold_milliseconds": 150,
  },
);
