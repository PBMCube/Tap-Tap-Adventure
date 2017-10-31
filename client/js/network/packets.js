Packets = {
    Handshake: 0,
    Intro: 1,
    Welcome: 2,
    Spawn: 3,
    List: 4,
    Who: 5,
    Equipment: 6,
    Ready: 7,
    Sync: 8,
    Movement: 9,
    Teleport: 10,
    Request: 11,
    Despawn: 12,
    Target: 13,
    Combat: 14,
    Animation: 15,
    Projectile: 16,
    Population: 17,
    Points: 18,
    Network: 19,
    Chat: 20,
    Command: 21,
    Inventory: 22,
    Bank: 23,
    Ability: 24,
    Quest: 25,
    Notification: 26,
    Blink: 27,
    Heal: 28,
    Experience: 29,
    Death: 30,
    Audio: 31,
    NPC: 32,
    Respawn: 33,
    Trade: 34,
    Enchant: 35,
    Guild: 36,
    Pointer: 37,
    PVP: 38,
    Click: 39
};

Packets.IntroOpcode = {
    Login: 0,
    Register: 1,
    Guest: 2
};

Packets.EquipmentOpcode = {
    Batch: 0,
    Equip: 1,
    Unequip: 2
};

Packets.MovementOpcode = {
    Request: 0,
    Started: 1,
    Step: 2,
    Stop: 3,
    Move: 4,
    Follow: 5,
    Entity: 6,
    Freeze: 7
};

Packets.TargetOpcode = {
    Talk: 0,
    Attack: 1,
    None: 2
};

Packets.CombatOpcode = {
    Initiate: 0,
    Hit: 1,
    Finish: 2
};

Packets.ProjectileOpcode = {
    Static: 0,
    Dynamic: 1,
    Create: 2,
    Update: 3,
    Impact: 4
};

Packets.NetworkOpcode = {
    Ping: 0,
    Pong: 1
};

Packets.InventoryOpcode = {
    Batch: 0,
    Add: 1,
    Remove: 2,
    Select: 3
};

Packets.BankOpcode = {
    Batch: 0,
    Add: 1,
    Remove: 2,
    Select: 3
};

Packets.QuestOpcode = {
    Batch: 0,
    Progress: 1,
    Finish: 2
};

Packets.NotificationOpcode = {
    Ok: 0,
    YesNo: 1,
    Text: 2
};

Packets.NPCOpcode = {
    Talk: 0,
    Store: 1,
    Bank: 2,
    Enchant: 3
};

Packets.TradeOpcode = {
    Request: 1,
    Accept: 2,
    Decline: 3
};

Packets.EnchantOpcode = {
    Select: 0,
    Remove: 1,
    Enchant: 2,
    Update: 3
};

Packets.GuildOpcode = {
    Create: 0,
    Join: 1,
    Leave: 2,
    Rank: 3,
    Loot: 4
};

Packets.PointerOpcode = {
    Location: 0,
    NPC: 1,
    Relative: 2,
    Remove: 3
};