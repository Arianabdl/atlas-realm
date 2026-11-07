  // ================= THEMES: exterior, emblem, interior art style =================
  const THEME_OF = {
    "f4e705761ac9912f1d214750699da323": "lab",
    "b032b2d3c9e302f54567427ca37b09c3": "server",
    "5c760c90333066c7ddadeed07b7ac06e": "warroom",
    "f869f8d30e9d38045e6cd689c1550279": "office",
    "e306cc7d29002007e87a0af0d564966c": "hall",
    "bc7a0b3eed3393961adbecc198f96f5f": "scriptorium",
    "7f2c00313567568fe60598c5ae019292": "hall",
    "288a38dbf9db903ef5ed85c12f8b1d2a": "academy",
    "bb38fddb4cfec880fb225ae5d3ec87ab": "academy",
    "204056c64f143c4fad918e00572b18ea": "lab",
    "ff152fb4aed7936b6dfbecd39299e0f4": "office",
    "a897d8ce8525330a054d3f525feb6c86": "server",
    "097b70c29eacf30f5ebb7fe2a08270ae": "travel",
    "251ec06f5c6c6eb82286a15ed62836e9": "workshop",
    "97f59b4d1e6c0c993a3976cafb9da390": "sanctum",
    "6f92a1d093501bf2b07565ae4027a712": "library",
    "1998c51288aa37e38deeb231bb249dc8": "academy",
    "a7e84710ebeede0462361cca3b0dcb88": "music",
    "1f977b07d6dfe8d9b6ec87a7d21440fe": "music",
    "fda1abeb81a3e2f898632377972bae87": "art",
    "83f1e21d4b4c5726a3f16d80de41f604": "kitchen",
    "7d85ae34d8d008779084d4475787dd8e": "media",
    "6373fedaf6a7d25f567a971ec1997547": "gym",
    "03841d7d4ea5531527957baf58a2b25d": "vault",
    "55e4a9984eb431d1ec0fc429c7aabf00": "vault",
    "a0f56a67ed174be3254309fd1126cf8d": "diary",
    "8ac31052b8c7b22087b47e4b52ffe318": "travel",
  };
  const I = s => s.split(" ");
  const THEMES = {
    lab:        { label: "Sound lab", acc: "#1f8f86", wall: ["#e6eef0", "#c9d6da"], feat: "dish", icon: I("....# ..#.# #.#.# #.### #####"),
                  in: { wall: ["#16303a", "#10252d"], wp: "grid", floor: ["#23333b", "#1c2a31"], fp: "tile", shelf: "#0f1d22", board: "screen" } },
    server:     { label: "Server room", acc: "#2f5f9a", wall: ["#c9ced8", "#aeb4c0"], feat: "antenna", icon: I(".#.#. ##### #...# ##### .#.#."),
                  in: { wall: ["#23283a", "#1b2030"], wp: "panel", floor: ["#3a4050", "#333848"], fp: "tile", shelf: "#1b2030", board: "screen" } },
    warroom:    { label: "War room", acc: "#9c3f2c", wall: ["#d7d2c4", "#bdb6a4"], feat: "banner", icon: I("#...# ##.## ..#.. ##.## #...#"),
                  in: { wall: ["#2a2438", "#221d2e"], wp: "panel", floor: ["#5a4632", "#4f3d2b"], fp: "wood", shelf: "#3a2a20", board: "cork" } },
    office:     { label: "Office", acc: "#3b6f8f", wall: ["#b7c7d6", "#9aaec0"], feat: "glass", icon: I(".###. #...# ##### ##.## #####"),
                  in: { wall: ["#dfe6ec", "#c8d2da"], wp: "glass", floor: ["#9aa4ae", "#8d97a1"], fp: "carpet", shelf: "#6a7480", board: "white" } },
    hall:       { label: "Council hall", acc: "#7a2f3a", wall: ["#e8e2d4", "#cfc6b2"], feat: "columns", icon: I("##### #.#.# #.#.# #.#.# #####"),
                  in: { wall: ["#8f8778", "#7c7466"], wp: "stone", floor: ["#6b2f35", "#5c282e"], fp: "carpet", shelf: "#4a2e1a", board: "cork" } },
    academy:    { label: "Classroom", acc: "#3c5a9a", wall: ["#e3cfa6", "#cdb68a"], feat: "bell", icon: I("..... ..#.. ##### .###. ....#"),
                  in: { wall: ["#d9c9a0", "#c9b88c"], wp: "wood", floor: ["#b08452", "#9a7045"], fp: "wood", shelf: "#5c3b22", board: "chalk" } },
    travel:     { label: "Travel bureau", acc: "#2c7a8f", wall: ["#ecdcc0", "#d6c3a2"], feat: "flags", icon: I(".###. #.#.# ##### #.#.# .###."),
                  in: { wall: ["#e8d8b8", "#d8c6a0"], wp: "stripe", floor: ["#8a5a3a", "#7a4e32"], fp: "wood", shelf: "#5c3b22", board: "cork" } },
    scriptorium:{ label: "Scriptorium", acc: "#5c3b22", wall: ["#e2cfae", "#cbb58f"], feat: "timber", icon: I("....# ...## ..##. .##.. #...."),
                  in: { wall: ["#6b4a33", "#5b3f2c"], wp: "wood", floor: ["#9a7045", "#8a6340"], fp: "wood", shelf: "#3a2418", board: "cork" } },
    tvstudio:   { label: "Film studio", acc: "#c8402f", wall: ["#4a4658", "#3a3648"], feat: "antenna", icon: I("#.... ###.. ##### ###.. #...."),
                  in: { wall: ["#1c1b24", "#15141c"], wp: "plain", floor: ["#2a2932", "#24232b"], fp: "tile", shelf: "#101016", board: "cork" } },
    cafe:       { label: "Café", acc: "#4e8f5a", wall: ["#f0e0c8", "#dcc8aa"], feat: "awning", icon: I("#.#.. ..... ####. ###.# ###.."),
                  in: { wall: ["#9c4a36", "#86402e"], wp: "brick", floor: ["#c9a26b", "#b89260"], fp: "tile", shelf: "#4a2e1a", board: "chalk" } },
    workshop:   { label: "Audio workshop", acc: "#8a6a2a", wall: ["#c8b89a", "#b0a080"], feat: "antenna", icon: I(".###. #...# #.#.# #...# .###."),
                  in: { wall: ["#b08a5a", "#9c7a4e"], wp: "peg", floor: ["#6a6e76", "#5e626a"], fp: "concrete", shelf: "#4a3220", board: "cork" } },
    art:        { label: "Atelier", acc: "#c85f9a", wall: ["#f4f0e6", "#dcd6c8"], feat: "skylight", icon: I(".###. #.#.# ###.# ####. .##.."),
                  in: { wall: ["#f2eee4", "#e2ddd0"], wp: "splat", floor: ["#c9b08a", "#b89f7a"], fp: "wood", shelf: "#8a6a44", board: "cork" } },
    music:      { label: "Music room", acc: "#7a2f5a", wall: ["#e8d0c8", "#d0b4aa"], feat: "note", icon: I("..### ..#.# ..#.. ###.. ###.."),
                  in: { wall: ["#6a1f2e", "#5a1a27"], wp: "trim", floor: ["#5a3a28", "#4f3322"], fp: "wood", shelf: "#3a1a12", board: "cork" } },
    kitchen:    { label: "Kitchen", acc: "#c9962a", wall: ["#f2e8d8", "#dccfb8"], feat: "chimney", icon: I(".###. ##### ##### .###. .###."),
                  in: { wall: ["#e8eef2", "#cdd8e0"], wp: "tile", floor: ["#e8e2d4", "#3a3a42"], fp: "checker", shelf: "#8a6a44", board: "cork" } },
    gym:        { label: "Gym", acc: "#c8402f", wall: ["#c87a5a", "#a8604a"], feat: "brick", icon: I(".###. #.#.# ##.## #.#.# .###."),
                  in: { wall: ["#cfd8de", "#b8c4cc"], wp: "mirror", floor: ["#3a5a78", "#34506c"], fp: "mat", shelf: "#5a5e66", board: "white" } },
    library:    { label: "Library", acc: "#5c3b22", wall: ["#b89878", "#a08060"], feat: "arch", icon: I("##### #...# #.### #...# #####"),
                  in: { wall: ["#4a2e1e", "#3e261a"], wp: "wood", floor: ["#6a2f2a", "#5c2824"], fp: "carpet", shelf: "#2e1a10", board: "cork" } },
    media:      { label: "Lounge", acc: "#5a4fa8", wall: ["#d0c8e0", "#b8aecc"], feat: "antenna", icon: I("#.#.# ##### #...# ##### #.#.#"),
                  in: { wall: ["#3a3458", "#302b4a"], wp: "stripe", floor: ["#8a7a9a", "#7c6e8c"], fp: "carpet", shelf: "#241f38", board: "cork" } },
    sanctum:    { label: "Sanctum", acc: "#5a3f8f", wall: ["#c8b8e0", "#a898c8"], feat: "star", icon: I("..#.. .###. ##### .###. ..#.."),
                  in: { wall: ["#1e1a3a", "#171430"], wp: "stars", floor: ["#3a2f5a", "#33294f"], fp: "carpet", shelf: "#120f24", board: "cork" } },
    diary:      { label: "Bedroom study", acc: "#b8607a", wall: ["#f4dce0", "#dcc0c6"], feat: "moon", icon: I(".###. ##... #.... ##... .###."),
                  in: { wall: ["#f0d6dc", "#e2c2ca"], wp: "stripe", floor: ["#b89a78", "#a88a6a"], fp: "wood", shelf: "#8a5a4a", board: "cork" } },
    greenhouse: { label: "Greenhouse", acc: "#3f8a4a", wall: ["#dff0e4", "#c4dccc"], feat: "glassroof", icon: I("...## ..### .###. ###.. #...."),
                  in: { wall: ["#cfe8d6", "#b8d8c2"], wp: "glass", floor: ["#7a5a3a", "#6a4e32"], fp: "concrete", shelf: "#5a4630", board: "cork" } },
    garage:     { label: "Garage", acc: "#6a6e76", wall: ["#b8bcc4", "#a0a4ac"], feat: "garagedoor", icon: I("#.#.. ###.. .##.. ..##. ...##"),
                  in: { wall: ["#8a8e96", "#7c8088"], wp: "peg", floor: ["#6e7076", "#62646a"], fp: "concrete", shelf: "#3a3c42", board: "cork" } },
    vault:      { label: "Vault", acc: "#c9962a", wall: ["#c8c8cc", "#adadb2"], feat: "columns", icon: I(".###. ##.## #.#.# ##.## .###."),
                  in: { wall: ["#d8d4cc", "#c4bfb4"], wp: "stone", floor: ["#e6e0d4", "#cfc8b8"], fp: "marble", shelf: "#6a5a40", board: "cork" } },
    market:     { label: "Market stall", acc: "#c8553d", wall: ["#ecdcc0", "#d6c3a2"], feat: "awning", icon: I(".#.#. ##### #...# #...# #####"),
                  in: { wall: ["#e6d2a8", "#d4be92"], wp: "canvas", floor: ["#b08452", "#9a7045"], fp: "wood", shelf: "#6b4a2b", board: "cork" } },
    party:      { label: "Party tent", acc: "#d9793f", wall: ["#f0e0c0", "#d8c6a0"], feat: "", icon: I(".##.. ####. ####. .##.. ..#.."),
                  in: { wall: ["#f2e4c4", "#e4d0a4"], wp: "canvas", floor: ["#6a9a4a", "#5e8c42"], fp: "grass", shelf: "#8a6a44", board: "cork" } },
  };
  // projects created after the snapshot get a building guessed from their name, then their Area
  const GUESS = [
    [/piano|music|پیانو|موسیقی/i, "music"], [/cook|recipe|آشپزی|غذا/i, "kitchen"], [/draw|paint|art|نقاشی/i, "art"],
    [/gym|sport|volley|ورزش|باشگاه|والیبال/i, "gym"], [/book|read|کتاب/i, "library"], [/thesis|paper|write|پایان‌?نامه|مقاله|رزومه|لینکدین/i, "scriptorium"],
    [/apply|abroad|travel|اپلای|سفر/i, "travel"], [/cafe|coffee|کافه/i, "cafe"], [/speaker|audio|equaliz|اسپیکر/i, "workshop"],
    [/youtube|video|film|یوتیوب/i, "tvstudio"], [/voice|speech|gan|صوت/i, "lab"], [/ai|rag|llm|agent|bot|app|n8n|docker|atlas|mcp/i, "server"],
    [/council|alumni|شورا|فارغ/i, "hall"], [/exam|course|class|ielts|konkur|کنکور|دانشگاه|university/i, "academy"],
    [/company|startup|business|شرکت|استارتاپ/i, "office"], [/car|repair|ماشین|خودرو/i, "garage"], [/buy|shop|خرید/i, "market"],
    [/finance|money|budget|مالی/i, "vault"], [/diary|daily|journal|خاطرات/i, "diary"], [/party|celebrat|جشن/i, "party"],
  ];
  // fallback building type per Area id (used when neither THEME_OF nor GUESS matches)
  const AREA_THEME = { work: "office", learn: "sanctum", create: "art", money: "vault", health: "gym", home: "diary" };
  const themeOf = p => {
    if (THEMES[THEME_OF[p.id]]) return THEME_OF[p.id];
    const hit = GUESS.find(([re]) => re.test(p.n || ""));
    return hit ? hit[1] : AREA_THEME[p.a] || "scriptorium";
  };

  function drawIcon(c, x, y, rows, fg) { rows.forEach((r, j) => [...r].forEach((ch, i) => { if (ch === "#") px(c, x + i, y + j, 1, 1, fg); })); }
  function drawEmblem(c, x, y, th, big) {
    const s = big ? 9 : 7, o = big ? 2 : 1;
    px(c, x + 1, y, s - 2, s, "#2a1d10"); px(c, x, y + 1, s, s - 2, "#2a1d10");
    px(c, x + 1, y + 1, s - 2, s - 2, th.acc);
    drawIcon(c, x + o, y + o, th.icon, "#fff6dc");
  }

  // exterior features drawn over the base house (w = 16 cottage, 24 manor)
  function drawFeature(c, x, y, w, key, t, anim) {
    const Q = (a, bb, ww, hh, col) => px(c, x + a, y + bb, ww, hh, col);
    const R = w - 16; // extra width on manors
    const blink = anim ? Math.floor(t * 2) % 2 : 1;
    switch (key) {
      case "dish": Q(1, 1, 1, 5, "#5a5e66"); Q(0, 0, 4, 1, "#d8dce4"); Q(-1, -1, 2, 1, "#d8dce4"); Q(3, -1, 1, 1, "#aeb4c0"); Q(1, -2, 1, 1, blink ? "#5cf2c8" : "#1f8f86"); break;
      case "antenna": Q(2, -4, 1, 8, "#5a5e66"); Q(1, -2, 3, 1, "#5a5e66"); Q(0, 0, 5, 1, "#5a5e66"); Q(2, -5, 1, 1, blink ? "#ff4a3a" : "#7a2a22"); break;
      case "banner": Q(2, -4, 1, 8, "#5c4630"); Q(3, -4, 4, 3, "#c8402f"); Q(3, -1, 2, 1, "#c8402f"); Q(4, -3, 1, 1, "#f2c14e"); break;
      case "columns": [2, 5, 10, 13 + R].forEach(a => { Q(a, 9, 2, 6, "#f4f0e6"); Q(a, 9, 2, 1, "#cfc6b2"); Q(a, 14, 2, 1, "#cfc6b2"); }); break;
      case "bell": Q(12 + R, 1, 3, 4, "#8a6a44"); Q(12 + R, 0, 3, 1, "#5c3b22"); Q(13 + R, 2, 1, 2, "#f2c14e"); break;
      case "flags": Q(14 + R, -4, 1, 9, "#5c4630"); Q(15 + R, -4, 3, 2, "#f4f0e6"); Q(16 + R, -3, 1, 1, "#c8402f"); Q(15 + R, -1, 3, 1, "#1a1a1a"); Q(15 + R, 0, 3, 1, "#c8402f"); Q(15 + R, 1, 3, 1, "#f2c14e"); break;
      case "awning": for (let i = 1; i < w - 1; i++) Q(i, 9, 1, 2, i % 2 ? "#c8402f" : "#f4f0e6"); Q(1, 11, w - 2, 1, "rgba(0,0,0,.2)"); break;
      case "skylight": Q(2, 5, 3, 2, "#a7d0f2"); Q(2, 5, 3, 1, "#e6f2fc"); break;
      case "note": Q(2, -4, 1, 6, "#1a1a1a"); Q(3, -4, 2, 1, "#1a1a1a"); Q(4, -3, 1, 1, "#1a1a1a"); Q(1, 1, 2, 2, "#1a1a1a"); break;
      case "chimney": break;
      case "star": Q(2, -3, 1, 3, "#f2c14e"); Q(1, -2, 3, 1, "#f2c14e"); break;
      case "moon": Q(2, -3, 2, 1, "#f4e8b0"); Q(1, -2, 1, 3, "#f4e8b0"); Q(2, 1, 2, 1, "#f4e8b0"); break;
      case "garagedoor": Q(5, 10, 6 + (R ? 4 : 0), 6, "#8a8e96"); for (let i = 11; i < 16; i += 2) Q(5, i, 6 + (R ? 4 : 0), 1, "#6a6e76"); break;
      default: break;
    }
  }

  // ---------- interior art styles (192 x 112) ----------
  function room(c, th, seed) {
    const P = (x, y, w, h, col) => px(c, x, y, w, h, col), r = mulberry(seed);
    const [w1, w2] = th.wall, [f1, f2] = th.floor;
    P(0, 0, 192, 48, w1);
    switch (th.wp) {
      case "grid": for (let x = 0; x < 192; x += 8) P(x, 0, 1, 48, w2); for (let y = 0; y < 48; y += 8) P(0, y, 192, 1, w2); break;
      case "panel": for (let x = 0; x < 192; x += 16) { P(x, 0, 1, 48, w2); P(x + 2, 4, 12, 18, w2); P(x + 3, 5, 10, 16, w1); } break;
      case "brick": for (let y = 0; y < 48; y += 4) { P(0, y, 192, 1, w2); for (let x = (y / 4 % 2) * 6; x < 192; x += 12) P(x, y, 1, 4, w2); } break;
      case "tile": for (let x = 0; x < 192; x += 6) P(x, 0, 1, 48, w2); for (let y = 0; y < 48; y += 6) P(0, y, 192, 1, w2); break;
      case "stripe": for (let x = 0; x < 192; x += 12) P(x, 0, 6, 48, w2); break;
      case "stone": for (let y = 0; y < 48; y += 8) { P(0, y, 192, 1, w2); for (let x = (y / 8 % 2) * 8; x < 192; x += 16) P(x, y, 1, 8, w2); } break;
      case "stars": for (let i = 0; i < 70; i++) P(Math.floor(r() * 192), Math.floor(r() * 46), 1, 1, r() < 0.2 ? "#f4e8b0" : "#8a86b8"); break;
      case "glass": for (let x = 0; x < 192; x += 24) P(x, 0, 2, 48, w2); P(0, 22, 192, 2, w2); break;
      case "wood": for (let y = 0; y < 48; y += 5) P(0, y, 192, 1, w2); break;
      case "peg": for (let y = 3; y < 46; y += 5) for (let x = 3; x < 192; x += 5) P(x, y, 1, 1, w2); break;
      case "splat": for (let i = 0; i < 26; i++) { const col = ["#e2574c", "#3c6fb0", "#f2c14e", "#4e8f5a", "#c85f9a"][i % 5]; P(Math.floor(r() * 188), Math.floor(r() * 44), 2, 1 + Math.floor(r() * 2), col); } break;
      case "trim": P(0, 6, 192, 1, "#c9962a"); P(0, 40, 192, 2, "#c9962a"); for (let x = 8; x < 192; x += 16) P(x, 12, 1, 24, w2); break;
      case "mirror": P(110, 4, 80, 38, "#e8f0f4"); for (let x = 110; x < 190; x += 20) P(x, 4, 1, 38, "#9aa8b2"); P(110, 42, 80, 2, "#5a5e66"); break;
      case "canvas": for (let x = 0; x < 192; x += 10) P(x, 0, 5, 48, w2); break;
      default: for (let i = 0; i < 80; i++) P(Math.floor(r() * 192), Math.floor(r() * 48), 1, 1, w2);
    }
    P(0, 48, 192, 2, "rgba(0,0,0,.35)");
    P(0, 50, 192, 62, f1);
    switch (th.fp) {
      case "wood": for (let y = 50, k = 0; y < 112; y += 6, k++) { P(0, y, 192, 1, f2); for (let x = (k % 2) * 12; x < 192; x += 24) P(x, y, 1, 6, f2); } break;
      case "tile": for (let y = 50; y < 112; y += 8) P(0, y, 192, 1, f2); for (let x = 0; x < 192; x += 8) P(x, 50, 1, 62, f2); break;
      case "checker": for (let y = 50; y < 112; y += 8) for (let x = ((y - 50) / 8 % 2) * 8; x < 192; x += 16) P(x, y, 8, 8, f2); break;
      case "carpet": P(0, 52, 192, 1, f2); P(0, 109, 192, 1, f2); for (let x = 4; x < 192; x += 8) P(x, 54, 2, 1, f2); break;
      case "concrete": for (let i = 0; i < 60; i++) P(Math.floor(r() * 192), 50 + Math.floor(r() * 62), 1, 1, f2); P(30, 90, 14, 1, f2); P(44, 91, 6, 1, f2); break;
      case "marble": for (let i = 0; i < 12; i++) { const x = Math.floor(r() * 180), y = 52 + Math.floor(r() * 56); P(x, y, 10, 1, f2); P(x + 9, y + 1, 6, 1, f2); } break;
      case "mat": for (let y = 50; y < 112; y += 12) P(0, y, 192, 1, f2); for (let x = 0; x < 192; x += 12) P(x, 50, 1, 62, f2); break;
      case "grass": for (let i = 0; i < 90; i++) P(Math.floor(r() * 192), 50 + Math.floor(r() * 62), 1, 2, f2); break;
    }
  }
  function shelfAndBoard(c, th, notes, tasks) {
    const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
    P(6, 4, 42, 46, th.shelf); P(8, 6, 38, 42, "rgba(0,0,0,.45)");
    const tops = [19, 34, 48]; tops.forEach(ty => P(8, ty, 38, 2, th.shelf));
    notes.slice(0, 21).forEach((n, i) => {
      const sh = Math.floor(i / 7), k = i % 7, hh = 9 + ((i * 7) % 4), X = 9 + k * 5, Y = tops[sh] - hh;
      P(X, Y, 4, hh, n.sealed ? "#2e2a33" : BOOKS[i % BOOKS.length]); P(X, Y + 2, 4, 1, "rgba(0,0,0,.25)");
      if (n.sealed) P(X + 1, Y + 4, 2, 2, "#f2c14e"); else if (n.sum) P(X + 1, Y + hh - 3, 2, 1, "#f3ead6");
    });
    const B = { cork: ["#6b4a2b", "#c89a5c", "#b3874b"], white: ["#8a929c", "#f4f6f8", "#dfe4ea"], chalk: ["#6b4a2b", "#2f4a3a", "#3a5a48"], screen: ["#0c1418", "#10262c", "#16343c"] }[th.board];
    P(56, 6, 50, 34, B[0]); P(58, 8, 46, 30, B[1]);
    for (let i = 0; i < 14; i++) P(59 + ((i * 13) % 44), 9 + ((i * 7) % 28), 1, 1, B[2]);
    tasks.slice(0, 10).forEach((tk, i) => {
      const X = 60 + (i % 5) * 9, Y = 10 + Math.floor(i / 5) * 14;
      if (th.board === "screen") { P(X, Y, 8, 11, tk.over ? "#4a1a1a" : "#123a3a"); P(X + 1, Y + 2, 6, 1, tk.over ? "#ff6a5a" : "#5cf2c8"); P(X + 1, Y + 5, 5, 1, "#3a8a80"); P(X + 1, Y + 7, 4, 1, "#3a8a80"); return; }
      P(X, Y, 8, 11, tk.over ? "#f7c6bf" : th.board === "chalk" ? "#e8e4d8" : "#f4ecd8"); P(X + 1, Y + 4, 6, 1, "#b9ad92"); P(X + 1, Y + 6, 5, 1, "#b9ad92"); P(X + 1, Y + 8, 4, 1, "#b9ad92");
      P(X + 3, Y, 2, 2, tk.pr === "h" ? "#c8402f" : tk.pr === "m" ? "#7a4fb0" : tk.pr === "l" ? "#3c6fb0" : "#8a7a5a");
      if (tk.over) { P(X + 6, Y + 8, 1, 1, "#c8402f"); P(X + 5, Y + 9, 1, 1, "#c8402f"); }
    });
  }
  // right side scene per theme: x 110..190, y 0..70, plus floor props
  const SCENES = {
    lab(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(112, 6, 40, 30, "#0a1216"); P(114, 8, 36, 26, "#06201c");
      for (let i = 0; i < 36; i += 6) P(114 + i, 8, 1, 26, "#0c2e28"); P(114, 21, 36, 1, "#0c2e28");
      for (let x = 0; x < 36; x++) { const y = 21 + Math.round(Math.sin((x + t * 24) / 3.2) * (live ? 6 : 1.5) * Math.sin((x + t * 7) / 11)); P(114 + x, y, 1, 1, "#5cf2c8"); }
      P(156, 6, 32, 30, "#0a1216");
      for (let x = 0; x < 28; x += 2) for (let y = 0; y < 26; y += 2) { const v = (Math.sin((x + (live ? t * 10 : 0)) * 0.4) + Math.cos(y * 0.5 + x * 0.1)) * 0.5 + 0.5; P(158 + x, 8 + y, 2, 2, v > 0.75 ? "#ffd23f" : v > 0.5 ? "#e2574c" : v > 0.25 ? "#7a2f8f" : "#1a1440"); }
      P(112, 42, 40, 14, "#2a3238"); P(112, 42, 40, 2, "#3a444c");
      for (let i = 0; i < 8; i++) { P(115 + i * 4, 46, 1, 8, "#11181c"); P(114 + i * 4, 47 + ((i * 3 + (live ? Math.floor(t * 3) : 0)) % 6), 3, 2, "#c9cfd6"); }
      P(146, 44, 2, 2, live && Math.floor(t * 4) % 2 ? "#5cf2c8" : "#1f8f86");
      [[160, 44], [176, 44]].forEach(([x, y]) => { P(x, y, 14, 26, "#1a1a20"); P(x + 3, y + 3, 8, 8, "#2e2e38"); P(x + 5, y + 5, 4, 4, "#0e0e12"); P(x + 4, y + 14, 6, 6, "#2e2e38"); P(x + 6, y + 16, 2, 2, "#0e0e12"); });
      for (let x = 150; x < 190; x += 3) P(x, 74 + Math.round(Math.sin(x / 5)), 2, 1, "#101418");
    },
    server(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      for (let k = 0; k < 4; k++) {
        const x = 112 + k * 20; P(x, 4, 18, 62, "#15181f"); P(x + 1, 5, 16, 60, "#262b36");
        for (let y = 8; y < 62; y += 5) { P(x + 2, y, 14, 3, "#1b1f28"); const on = live ? ((Math.floor(t * 6) + y + k * 7) % 5) : 1; P(x + 12, y + 1, 1, 1, on ? "#5cf28a" : "#1f5a2e"); P(x + 14, y + 1, 1, 1, (on + k) % 3 ? "#ffb24a" : "#5a3a1a"); }
      }
      P(112, 68, 78, 3, "#1b1f28"); for (let x = 114; x < 190; x += 6) P(x, 69, 3, 1, "#3c6fb0");
    },
    warroom(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(112, 4, 76, 40, "#0c1428"); P(114, 6, 72, 36, "#10203c");
      const nodes = [[150, 22], [124, 12], [176, 12], [124, 34], [176, 34], [150, 8], [150, 36]];
      const cols = ["#f2c14e", "#e2574c", "#6fa8dc", "#b5a1e6", "#8f9c52", "#c7cbe0", "#efe9ff"];
      nodes.slice(1).forEach(([x, y]) => { const steps = 20; for (let i = 0; i < steps; i++) P(Math.round(150 + (x - 150) * i / steps), Math.round(22 + (y - 22) * i / steps), 1, 1, "#2c4478"); });
      if (live) nodes.slice(1).forEach(([x, y], i) => { const f = ((t * 0.6 + i / 6) % 1); P(Math.round(150 + (x - 150) * f), Math.round(22 + (y - 22) * f), 2, 2, "#ffffff"); });
      nodes.forEach(([x, y], i) => { P(x - 2, y - 2, 5, 5, "#0c1428"); P(x - 1, y - 1, 3, 3, cols[i]); });
      P(154, 64, 36, 14, "#5c3b22"); P(156, 62, 32, 4, "#d9c79a"); P(160, 63, 2, 2, "#e2574c"); P(170, 63, 2, 2, "#3c6fb0"); P(180, 62, 2, 2, "#f2c14e"); P(158, 78, 2, 6, "#3a2418"); P(184, 78, 2, 6, "#3a2418");
    },
    office(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(112, 6, 40, 28, "#8a929c"); P(113, 7, 38, 26, "#f7f9fb");
      P(116, 12, 14, 1, "#3c6fb0"); P(116, 16, 20, 1, "#e2574c"); P(116, 20, 10, 1, "#4e8f5a"); P(134, 22, 8, 8, "#f2c14e"); P(116, 26, 24, 1, "#3c6fb0");
      P(154, 50, 34, 4, "#8a6a44"); P(156, 54, 2, 14, "#6b4a2b"); P(184, 54, 2, 14, "#6b4a2b");
      P(164, 38, 16, 12, "#1a1a20"); P(165, 39, 14, 9, live ? "#6fa8dc" : "#3a4a5a"); P(171, 48, 2, 2, "#1a1a20");
      P(166, 60, 12, 10, "#2a2f3a"); P(168, 70, 8, 2, "#1a1a20");
      P(114, 40, 8, 24, "#dfe6ec"); P(115, 36, 6, 6, "#a7d0f2");
      P(186, 30, 4, 6, "#4e8f5a"); P(185, 28, 6, 3, "#67ae55"); P(186, 36, 4, 6, "#8a5a3a");
    },
    hall(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      [[114, "#7a2f3a"], [178, "#2c4478"]].forEach(([x, col]) => { P(x, 2, 10, 34, col); P(x, 36, 5, 3, col); P(x + 5, 36, 5, 3, col); P(x + 3, 12, 4, 4, "#f2c14e"); P(x - 1, 2, 12, 2, "#5c3b22"); });
      P(138, 30, 30, 30, "#6b4a2b"); P(140, 32, 26, 26, "#8a6a44"); P(150, 38, 6, 6, "#f2c14e"); P(151, 39, 4, 4, "#c9962a"); P(136, 28, 34, 3, "#5c3b22");
      for (let x = 112; x < 190; x += 12) { P(x, 98, 8, 8, "#5c3b22"); P(x, 96, 8, 2, "#8a6a44"); }
    },
    academy(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(112, 6, 60, 34, "#6b4a2b"); P(114, 8, 56, 30, "#2f4a3a");
      const ch = "#e8e4d8"; P(118, 12, 6, 1, ch); P(118, 12, 1, 6, ch); P(118, 17, 6, 1, ch); P(128, 14, 3, 1, ch); P(129, 13, 1, 3, ch); P(134, 12, 1, 6, ch); P(136, 14, 8, 1, ch);
      P(118, 24, 30, 1, ch); P(118, 28, 22, 1, ch); P(150, 24, 12, 8, "#3a5a48"); P(151, 25, 10, 6, "#2f4a3a"); P(152, 30, 8, 1, ch); P(153, 26, 1, 4, ch);
      P(114, 40, 56, 2, "#8a6a44"); P(130, 39, 3, 1, "#f4f0e6");
      P(176, 38, 12, 12, "#3c6fb0"); P(178, 40, 4, 4, "#4e8f5a"); P(183, 44, 3, 3, "#4e8f5a"); P(181, 50, 2, 10, "#5c3b22"); P(177, 60, 10, 2, "#5c3b22");
      for (let x = 156; x < 190; x += 12) { P(x, 94, 10, 3, "#8a6a44"); P(x + 1, 97, 1, 8, "#5c3b22"); P(x + 8, 97, 1, 8, "#5c3b22"); }
    },
    travel(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(112, 4, 76, 38, "#8a6a44"); P(114, 6, 72, 34, "#6fa8dc");
      [[118, 10, 14, 10], [134, 12, 10, 8], [148, 9, 18, 12], [164, 22, 12, 10], [124, 24, 8, 12], [178, 12, 6, 5]].forEach(([x, y, w, h]) => { P(x, y, w, h, "#7cc07a"); P(x + 2, y + 2, w - 4, h - 4, "#9ad48a"); });
      [[155, 14, "#c8402f"], [128, 30, "#c8402f"], [181, 14, "#f2c14e"]].forEach(([x, y, col]) => { P(x, y - 3, 1, 3, "#1a1a1a"); P(x - 1, y - 5, 3, 2, col); });
      P(116, 46, 1, 16, "#5c4630"); P(117, 46, 7, 5, "#f4f0e6"); P(119, 47, 3, 3, "#c8402f");
      P(128, 46, 1, 16, "#5c4630"); P(129, 46, 7, 2, "#1a1a1a"); P(129, 48, 7, 2, "#c8402f"); P(129, 50, 7, 2, "#f2c14e");
      P(160, 60, 26, 14, "#8a3f22"); P(160, 60, 26, 1, "#b85f35"); P(170, 58, 6, 2, "#3a2418"); P(164, 48, 18, 12, "#3c5a9a"); P(171, 46, 4, 2, "#1a1a1a"); P(166, 52, 14, 1, "#2c4478");
    },
    scriptorium(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(112, 4, 16, 44, "#3a2418"); for (let y = 8; y < 46; y += 6) { P(114, y, 12, 4, "#e8d8b0"); P(114, y, 2, 4, "#c9b48a"); P(124, y, 2, 4, "#c9b48a"); }
      [[136, 8], [150, 12], [166, 7], [178, 14]].forEach(([x, y], i) => { P(x, y, 10, 13, "#f4ecd8"); P(x + 2, y + 3, 6, 1, "#b9ad92"); P(x + 2, y + 6, 5, 1, "#b9ad92"); P(x + 4, y - 1, 2, 2, "#c8402f"); });
      P(132, 50, 56, 6, "#5c3b22"); P(134, 56, 3, 14, "#3a2418"); P(183, 56, 3, 14, "#3a2418");
      P(146, 46, 16, 4, "#f4ecd8"); P(147, 47, 12, 1, "#b9ad92"); P(168, 45, 4, 5, "#1a1a2a"); P(170, 40, 1, 6, "#f4f0e6"); P(171, 39, 2, 2, "#f4f0e6");
      const fl = live ? Math.floor(t * 6) % 2 : 0; P(138, 44, 2, 6, "#f4ecd8"); P(138, 42 - fl, 2, 2, "#ffd23f"); P(178, 44, 2, 6, "#f4ecd8"); P(178, 42 - (1 - fl), 2, 2, "#ffd23f");
    },
    tvstudio(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(140, 4, 36, 40, "#3a5a78");
      [[114, 8], [178, 8]].forEach(([x, y]) => { P(x, y, 12, 14, "#f4f0e6"); P(x + 1, y + 1, 10, 12, "#ffffff"); P(x + 5, y + 14, 2, 40, "#3a3a42"); P(x + 1, y + 54, 10, 2, "#3a3a42"); });
      P(152, 46, 20, 12, "#1a1a20"); P(172, 49, 6, 6, "#2a2a32"); P(174, 51, 3, 3, "#6fa8dc"); P(160, 58, 2, 10, "#3a3a42"); P(154, 68, 14, 2, "#3a3a42"); P(156, 66, 2, 2, "#3a3a42"); P(164, 66, 2, 2, "#3a3a42");
      P(154, 42, 4, 3, live && Math.floor(t * 2) % 2 ? "#ff3a2a" : "#6a1a14");
    },
    cafe(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(150, 6, 38, 24, "#6b4a2b"); P(152, 8, 34, 20, "#1e2420"); P(155, 11, 14, 1, "#e8e4d8"); P(155, 15, 20, 1, "#e8e4d8"); P(155, 19, 10, 1, "#9ad48a"); P(155, 23, 16, 1, "#e8e4d8");
      P(112, 46, 78, 4, "#8a5a3a"); P(112, 50, 78, 20, "#6b4a2b"); for (let x = 116; x < 190; x += 10) P(x, 52, 1, 16, "#5c3b22");
      P(116, 30, 16, 16, "#c9cfd6"); P(118, 32, 12, 8, "#8a929c"); P(121, 40, 6, 2, "#3a3a42"); P(122, 42, 4, 3, "#f4f0e6");
      if (live) for (let i = 0; i < 3; i++) { const ph = (t * 0.8 + i / 3) % 1; c.fillStyle = `rgba(255,255,255,${(0.8 * (1 - ph)).toFixed(2)})`; c.fillRect(124 + Math.round(Math.sin(ph * 6 + i) * 2), 28 - Math.round(ph * 14), 2, 2); }
      [[138, 38, "#7cc07a"], [146, 38, "#4e8f5a"], [154, 38, "#9ad48a"]].forEach(([x, y, col]) => { P(x, y, 6, 8, "#e8f0ec"); P(x + 1, y + 3, 4, 5, col); P(x, y - 1, 6, 1, "#8a6a44"); });
      [[168, 42], [176, 42]].forEach(([x, y]) => { P(x, y, 5, 4, "#f4f0e6"); P(x + 5, y + 1, 1, 2, "#f4f0e6"); P(x + 1, y, 3, 1, "#4e8f5a"); });
    },
    workshop(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      [[116, 8, "#8a929c"], [126, 6, "#c8402f"], [136, 10, "#8a929c"], [146, 6, "#f2c14e"]].forEach(([x, y, col]) => { P(x, y, 2, 14, col); P(x - 1, y, 4, 3, col); });
      P(112, 44, 78, 4, "#8a6a44"); P(114, 48, 3, 22, "#5c3b22"); P(185, 48, 3, 22, "#5c3b22");
      P(118, 24, 18, 20, "#1a1a20"); P(122, 27, 10, 10, "#2e2e38"); P(125, 30, 4, 4, "#0e0e12"); P(124, 39, 6, 3, "#2e2e38");
      P(150, 22, 1, 22, "#3a3a42"); P(148, 20, 5, 4, "#5a5e66"); P(146, 43, 9, 1, "#3a3a42");
      P(160, 34, 24, 10, "#2a2f3a"); P(161, 35, 22, 8, "#10262c");
      for (let x = 0; x < 22; x++) P(161 + x, 39 - Math.round(Math.sin(x / 3 + (live ? t * 2 : 0)) * 2) + (x > 15 ? 1 : 0), 1, 1, "#ffd23f");
      P(164, 44, 16, 1, "#1a1a20");
      [[150, 84], [164, 88], [178, 84]].forEach(([x, y]) => { P(x, y, 10, 14, "#1a1a20"); P(x + 2, y + 2, 6, 6, "#2e2e38"); P(x + 3, y + 3, 4, 4, "#0e0e12"); });
    },
    art(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      c.fillStyle = "rgba(255,248,210,.35)"; c.beginPath(); c.moveTo(150, 0); c.lineTo(166, 0); c.lineTo(188, 60); c.lineTo(132, 60); c.fill();
      [[118, 18, ["#3c6fb0", "#f2c14e", "#4e8f5a"]], [158, 14, ["#e2574c", "#c85f9a", "#f4e8b0"]]].forEach(([x, y, cols]) => {
        P(x + 2, y + 24, 2, 34, "#8a6a44"); P(x + 18, y + 24, 2, 34, "#8a6a44"); P(x + 10, y + 20, 2, 38, "#6b4a2b");
        P(x, y, 22, 24, "#f4f0e6"); P(x + 2, y + 2, 18, 20, cols[0]); P(x + 4, y + 12, 10, 8, cols[1]); P(x + 12, y + 4, 6, 6, cols[2]);
        P(x - 1, y + 24, 24, 2, "#6b4a2b");
      });
      [[118, 92, "#e2574c"], [128, 94, "#3c6fb0"], [180, 92, "#f2c14e"]].forEach(([x, y, col]) => { P(x, y, 6, 6, "#c9cfd6"); P(x + 1, y, 4, 2, col); });
      P(172, 100, 12, 2, "#c85f9a"); P(176, 102, 5, 1, "#c85f9a");
    },
    music(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(116, 30, 60, 18, "#141418"); P(118, 26, 40, 6, "#141418"); P(160, 28, 16, 4, "#1e1e24");
      P(116, 48, 60, 6, "#0c0c10"); for (let x = 117; x < 175; x += 3) P(x, 49, 2, 4, "#f4f0e6"); for (let x = 118; x < 174; x += 6) P(x, 49, 1, 2, "#0c0c10");
      P(120, 54, 3, 16, "#0c0c10"); P(170, 54, 3, 16, "#0c0c10"); P(134, 22, 12, 8, "#f4f0e6"); P(135, 24, 10, 1, "#1a1a1a"); P(135, 26, 10, 1, "#1a1a1a");
      P(140, 72, 14, 4, "#3a1a12"); P(142, 76, 2, 6, "#2a120c"); P(150, 76, 2, 6, "#2a120c");
      if (live) for (let i = 0; i < 4; i++) { const ph = (t * 0.35 + i / 4) % 1, x = 126 + i * 12 + Math.round(Math.sin(ph * 6) * 3), y = 22 - Math.round(ph * 20); c.fillStyle = `rgba(242,193,78,${(1 - ph).toFixed(2)})`; c.fillRect(x, y, 2, 2); c.fillRect(x + 1, y - 4, 1, 4); }
      P(180, 8, 6, 20, "#8a3f22"); P(181, 12, 4, 10, "#b85f35"); P(182, 4, 2, 6, "#3a1a12");
    },
    kitchen(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(112, 8, 60, 2, "#5a5e66"); [[118, "#3a3a42"], [132, "#c8553d"], [146, "#3a3a42"], [160, "#c9cfd6"]].forEach(([x, col]) => { P(x + 3, 10, 1, 4, "#5a5e66"); P(x, 14, 8, 6, col); });
      P(112, 40, 32, 30, "#c9cfd6"); P(114, 42, 28, 4, "#3a3a42"); P(116, 50, 24, 16, "#8a929c"); P(118, 52, 20, 12, "#2a2f3a");
      P(118, 32, 12, 8, "#5a5e66"); P(117, 31, 14, 2, "#3a3a42");
      if (live) for (let i = 0; i < 3; i++) { const ph = (t * 0.7 + i / 3) % 1; c.fillStyle = `rgba(255,255,255,${(0.8 * (1 - ph)).toFixed(2)})`; c.fillRect(122 + Math.round(Math.sin(ph * 6 + i) * 3), 30 - Math.round(ph * 14), 2, 2); }
      P(148, 46, 26, 24, "#8a6a44"); P(148, 44, 26, 3, "#dfe6ec");
      P(154, 36, 14, 8, "#f5c6d6"); P(154, 36, 14, 2, "#f4f0e6"); P(160, 33, 1, 3, "#f2c14e");
      P(176, 16, 14, 54, "#e8eef2"); P(176, 34, 14, 1, "#aeb4c0"); P(187, 22, 1, 6, "#8a929c"); P(187, 40, 1, 8, "#8a929c");
    },
    gym(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(116, 20, 2, 50, "#5a5e66"); P(186, 20, 2, 50, "#5a5e66"); P(118, 22, 68, 2, "#f4f0e6");
      for (let x = 118; x < 186; x += 4) P(x, 24, 1, 14, "#8a929c"); for (let y = 26; y < 38; y += 4) P(118, y, 68, 1, "#8a929c"); P(118, 38, 68, 1, "#f4f0e6");
      const by = live ? 44 + Math.round(Math.abs(Math.sin(t * 2.5)) * -18) : 58; P(150, by, 7, 7, "#f4e8b0"); P(151, by + 1, 2, 5, "#3c6fb0"); P(154, by + 1, 2, 5, "#f2c14e");
      P(120, 80, 20, 3, "#3a3a42"); P(118, 76, 3, 10, "#1a1a20"); P(139, 76, 3, 10, "#1a1a20");
      P(170, 84, 18, 6, "#3a3a42"); for (let i = 0; i < 3; i++) P(172 + i * 6, 80, 4, 4, "#1a1a20");
    },
    library(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      for (let k = 0; k < 3; k++) { const x = 112 + k * 26; P(x, 2, 24, 48, "#2e1a10"); for (let y = 12; y <= 48; y += 12) { P(x + 1, y, 22, 2, "#4a2e1e"); for (let i = 0; i < 7; i++) P(x + 2 + i * 3, y - 9 + (i % 3), 2, 9 - (i % 3), BOOKS[(i + k + y) % BOOKS.length]); } }
      P(160, 64, 24, 18, "#8a2f2a"); P(162, 60, 20, 6, "#a8403a"); P(160, 82, 3, 4, "#3a1a12"); P(181, 82, 3, 4, "#3a1a12");
      P(146, 50, 2, 34, "#3a2418"); P(142, 46, 10, 6, "#f2c14e"); c.fillStyle = "rgba(255,220,140,.18)"; c.fillRect(132, 52, 30, 34);
    },
    media(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(126, 8, 44, 28, "#141418"); P(128, 10, 40, 24, live ? ["#3c6fb0", "#4e8f5a", "#c8553d"][Math.floor(t / 2) % 3] : "#23232b");
      if (live) { P(134, 18, 12, 6, "#f4f0e6"); P(150, 14, 8, 14, "#1a1a20"); }
      P(140, 36, 16, 3, "#2a2a32"); P(176, 6, 12, 26, "#f4f0e6"); P(177, 16, 10, 5, "#c8402f"); P(178, 21, 2, 2, "#1a1a1a"); P(184, 21, 2, 2, "#1a1a1a");
      P(150, 66, 38, 14, "#5a4fa8"); P(150, 62, 38, 6, "#6a5fb8"); P(150, 80, 3, 4, "#241f38"); P(185, 80, 3, 4, "#241f38");
      P(118, 60, 6, 10, "#8a5a3a"); P(116, 50, 10, 10, "#4e8f5a");
    },
    sanctum(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(146, 4, 36, 36, "#2e2850"); P(148, 6, 32, 32, "#101030"); P(170, 10, 6, 6, "#f4e8b0"); P(172, 10, 4, 4, "#101030");
      for (let i = 0; i < 12; i++) P(150 + (i * 11) % 28, 8 + (i * 7) % 28, 1, 1, "#f4f0e6");
      P(163, 6, 2, 32, "#2e2850"); P(148, 21, 32, 2, "#2e2850");
      P(112, 40, 30, 3, "#3a2f5a");
      [116, 124, 132].forEach((x, i) => { P(x, 32, 3, 8, "#f4ecd8"); const f = live ? (Math.floor(t * 6) + i) % 2 : 0; P(x, 29 - f, 3, 3, "#ffd23f"); P(x + 1, 28 - f, 1, 1, "#fff6dc"); });
      P(160, 90, 22, 8, "#7a4fb0"); P(162, 88, 18, 3, "#8f63c6");
      if (live) for (let i = 0; i < 3; i++) { const ph = (t * 0.3 + i / 3) % 1; c.fillStyle = `rgba(200,190,230,${(0.6 * (1 - ph)).toFixed(2)})`; c.fillRect(186 + Math.round(Math.sin(ph * 8) * 2), 80 - Math.round(ph * 30), 1, 2); }
      P(185, 80, 3, 6, "#5c3b22");
    },
    diary(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(160, 8, 24, 22, "#8a5a4a"); P(162, 10, 20, 18, "#28305a"); P(174, 13, 5, 5, "#f4e8b0"); P(176, 13, 3, 3, "#28305a");
      P(150, 58, 40, 20, "#f4f0e6"); P(150, 56, 40, 4, "#b8607a"); P(150, 52, 12, 8, "#fbe4ea"); P(150, 78, 3, 6, "#8a5a4a"); P(187, 78, 3, 6, "#8a5a4a");
      P(112, 44, 32, 4, "#8a5a4a"); P(114, 48, 2, 22, "#6a4436"); P(140, 48, 2, 22, "#6a4436");
      P(118, 40, 14, 4, "#f4ecd8"); P(125, 40, 1, 4, "#b8607a"); P(136, 36, 2, 8, "#f4ecd8"); P(136, 34 - (live ? Math.floor(t * 5) % 2 : 0), 2, 2, "#ffd23f");
    },
    greenhouse(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      for (let k = 0; k < 2; k++) { const y = 20 + k * 20; P(112, y, 78, 3, "#8a6a44"); for (let i = 0; i < 6; i++) { const x = 116 + i * 12; P(x, y - 6, 7, 6, "#b85f35"); P(x + 1, y - 12, 5, 6, "#4e8f5a"); P(x + 2, y - 14, 3, 2, "#67ae55"); if (i % 2) P(x + 3, y - 13, 1, 1, "#f5a6c8"); } }
      [[128, 4], [168, 4]].forEach(([x, y]) => { P(x, 0, 1, 6, "#5c4630"); P(x - 3, y + 2, 7, 5, "#b85f35"); for (let i = 0; i < 4; i++) P(x - 3 + i * 2, y + 7, 1, 4 + i, "#4e8f5a"); });
      P(170, 86, 14, 10, "#6a8a9a"); P(184, 88, 5, 2, "#6a8a9a"); P(166, 84, 6, 2, "#6a8a9a");
      P(118, 60, 12, 12, "#f4f0e6"); P(119, 61, 10, 10, "#c8402f"); P(121, 63, 6, 6, "#f4f0e6"); P(120, 66, 8, 1, "#c8402f");
    },
    garage(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      [[116, "#8a929c"], [124, "#c8402f"], [132, "#8a929c"], [140, "#3c6fb0"]].forEach(([x, col]) => { P(x, 8, 2, 14, col); P(x - 1, 8, 4, 3, col); });
      P(122, 44, 60, 14, "#c8402f"); P(132, 34, 38, 12, "#c8402f"); P(136, 36, 14, 8, "#a7d0f2"); P(152, 36, 14, 8, "#a7d0f2"); P(122, 50, 60, 2, "#9c2f22");
      [[128, 56], [166, 56]].forEach(([x, y]) => { P(x, y, 12, 12, "#1a1a20"); P(x + 3, y + 3, 6, 6, "#8a929c"); P(x + 5, y + 5, 2, 2, "#1a1a20"); });
      P(180, 44, 2, 2, "#ffd23f"); P(120, 46, 2, 3, "#f4f0e6");
      for (let i = 0; i < 3; i++) { P(176, 72 + i * 8, 14, 7, "#1a1a20"); P(180, 74 + i * 8, 6, 3, "#3a3a42"); }
      P(112, 88, 20, 12, "#c8402f"); P(112, 86, 20, 3, "#9c2f22"); P(120, 84, 4, 2, "#3a3a42");
    },
    vault(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      P(142, 4, 44, 44, "#6a6e76"); P(146, 8, 36, 36, "#8a929c"); P(150, 12, 28, 28, "#a0a6ae");
      const a = live ? t * 0.5 : 0; for (let i = 0; i < 6; i++) { const ang = a + i * Math.PI / 3; for (let r = 3; r < 12; r++) P(Math.round(164 + Math.cos(ang) * r), Math.round(26 + Math.sin(ang) * r), 1, 1, "#c9962a"); }
      P(162, 24, 4, 4, "#f2c14e");
      [[116, 96, 5], [128, 98, 4], [176, 96, 6]].forEach(([x, y, n]) => { for (let i = 0; i < n; i++) { P(x + (i % 3) * 3, y - Math.floor(i / 3) * 3, 4, 3, "#f2c14e"); P(x + (i % 3) * 3, y - Math.floor(i / 3) * 3 + 2, 4, 1, "#c9962a"); } });
      P(114, 40, 24, 3, "#5c3b22"); P(118, 32, 16, 8, "#2c4478"); P(120, 34, 12, 1, "#f4f0e6");
      P(124, 20, 1, 12, "#5c3b22"); P(116, 22, 18, 1, "#5c3b22"); P(115, 23, 4, 3, "#c9962a"); P(131, 23, 4, 3, "#c9962a");
    },
    market(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      for (let x = 112; x < 190; x += 6) P(x, 8, 3, 8, "#c8402f"); for (let x = 112; x < 190; x += 6) P(x + 3, 8, 3, 8, "#f4f0e6"); P(112, 16, 78, 2, "#8a3f22");
      P(112, 44, 78, 4, "#8a6a44"); P(112, 48, 78, 22, "#6b4a2b");
      P(118, 30, 10, 14, "#5c3b22"); P(120, 26, 6, 4, "#f2c14e"); P(124, 18, 10, 10, "#f2c14e"); P(126, 20, 6, 6, "#c9962a");
      P(144, 28, 14, 16, "#1a1a20"); P(147, 31, 8, 8, "#2e2e38"); P(149, 33, 4, 4, "#0e0e12");
      P(166, 38, 12, 4, "#1a1a20"); P(167, 39, 4, 2, "#a7d0f2"); P(173, 39, 4, 2, "#a7d0f2");
      [[122, 46], [150, 46], [172, 46]].forEach(([x, y]) => { P(x, y, 8, 5, "#f4ecd8"); P(x + 1, y + 2, 6, 1, "#4e8f5a"); });
    },
    party(c, t, live) {
      const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
      const cols = ["#e2574c", "#f2c14e", "#3c6fb0", "#4e8f5a", "#c85f9a"];
      for (let i = 0; i < 16; i++) { const x = 6 + i * 12; P(x, 2, 12, 1, "#5c4630"); P(x + 2, 3, 8, 3, cols[i % 5]); P(x + 4, 6, 4, 2, cols[i % 5]); }
      P(138, 50, 40, 18, "#f4f0e6"); P(138, 48, 40, 3, "#e2c4d0"); P(142, 36, 32, 12, "#f5c6d6"); P(142, 36, 32, 2, "#f4f0e6");
      for (let i = 0; i < 4; i++) { P(146 + i * 8, 30, 1, 6, "#f4f0e6"); P(146 + i * 8, 28, 1, 2, "#ffd23f"); }
      [[120, 12, "#e2574c"], [128, 18, "#3c6fb0"], [182, 14, "#f2c14e"]].forEach(([x, y, col]) => { P(x, y, 6, 8, col); P(x + 1, y + 1, 1, 2, "#ffffff"); P(x + 3, y + 8, 1, 14, "#8a8e96"); });
      P(160, 18, 10, 2, "#1a1a1a"); P(163, 16, 4, 2, "#1a1a1a"); P(169, 20, 1, 3, "#f2c14e");
    },
  };
  function drawStateOverlay(c, p, t, anim) {
    const P = (x, y, w, h, col) => px(c, x, y, w, h, col);
    if (p.state === "idle") {
      c.fillStyle = "rgba(40,34,30,.25)"; c.fillRect(108, 0, 84, 112);
      P(150, 88, 16, 14, "#a07c50"); P(150, 88, 16, 1, "#6b4a2b"); P(157, 88, 1, 14, "#6b4a2b"); P(168, 92, 14, 10, "#8a6a44"); P(168, 96, 14, 1, "#6b4a2b");
      P(112, 60, 30, 3, "#b58b52"); P(114, 50, 2, 30, "#b58b52"); P(138, 50, 2, 30, "#b58b52");
    }
    if (p.state === "done") { P(176, 96, 10, 3, "#8a6a44"); P(178, 88, 6, 8, "#f2c14e"); P(176, 88, 2, 3, "#f2c14e"); P(184, 88, 2, 3, "#f2c14e"); P(180, 86, 2, 2, "#fff6dc"); }
  }

  // ================= AGENT LOOKS =================
  // hat, item, extras. Sprite is 5x8 at (x,y), unit s. Hats sit on rows -4..0.
  const LOOKS = {
    atlas: { hat: "crown" }, hermes: { hat: "winged", item: "scroll" }, planner: { hat: "wizard", hc: "#6a4fb0", item: "hourglass" },
    librarian: { glasses: 1, item: "book" }, notion_agent: { hat: "cube", item: "clipboard" }, academic: { hat: "mortar", item: "scroll" },
    voice_lab: { hat: "headphones", hc: "#1f8f86", item: "mic" }, latex_builder: { hat: "hardhat", hc: "#f2c14e", item: "scroll" },
    slides_agent: { hat: "cap", hc: "#c8402f", item: "pointer" }, ai_engineer: { visor: "#5cf2c8", item: "laptop" },
    apply: { hat: "pith", item: "book" }, exam_prep: { hat: "headband", hc: "#3c6fb0", item: "book" },
    regulations_qa: { glasses: 1, item: "scroll" }, student_profile: { hat: "cap", hc: "#4e8f5a", item: "book" },
    teaching_assistant: { glasses: 1, item: "chalk" }, plant_monitor: { hat: "hardhat", hc: "#f08a4b", item: "bolt" },
    thesis_helper: { hat: "wig", item: "gavel" }, career: { tie: "#c8402f", item: "briefcase" }, resume: { item: "quill" },
    recruiter: { hat: "headphones", hc: "#1a1a20", item: "clipboard" }, research_editor: { glasses: 1, item: "quill" },
    architect: { hat: "tophat", item: "roll" }, maintenance: { hat: "cap", hc: "#3c5a9a", item: "wrench" },
    github: { hat: "hood", hc: "#5a5e6a", item: "laptop" }, philosophy: { hat: "laurel", beard: 1, item: "scroll" },
    music: { hat: "beret", hc: "#1a1a20", item: "note" }, drawing: { hat: "beret", hc: "#c8402f", item: "brush" },
    cooking: { hat: "chef", item: "pan" }, sport: { hat: "headband", hc: "#e2574c", item: "ball" },
    spotify_dj: { hat: "headphones", hc: "#5fd07f", glasses: 2 },
  };
  function drawLook(c, x, y, a, s, grey) {
    const L = LOOKS[a]; if (!L) return;
    const Q = (i, j, w, h, col) => px(c, x + i * s, y + j * s, w * s, h * s, grey ? "#6e6a80" : col);
    const hc = L.hc || "#c8402f";
    switch (L.hat) {
      case "crown": Q(0, -1, 1, 1, "#f2c14e"); Q(2, -1, 1, 1, "#f2c14e"); Q(4, -1, 1, 1, "#f2c14e"); Q(0, 0, 5, 1, "#f2c14e"); Q(2, 0, 1, 1, "#e2574c"); break;
      case "winged": Q(1, -1, 3, 1, "#f2c14e"); Q(0, 0, 5, 1, "#f2c14e"); Q(-1, -1, 1, 1, "#ffffff"); Q(5, -1, 1, 1, "#ffffff"); Q(-2, -2, 1, 1, "#ffffff"); Q(6, -2, 1, 1, "#ffffff"); break;
      case "wizard": Q(2, -4, 1, 1, hc); Q(2, -3, 2, 1, hc); Q(1, -2, 3, 1, hc); Q(1, -1, 4, 1, hc); Q(-1, 0, 7, 1, hc); Q(2, -2, 1, 1, "#f2c14e"); break;
      case "cube": Q(1, -2, 3, 3, "#1a1a1a"); Q(2, -1, 1, 1, "#f4f0e6"); break;
      case "mortar": Q(-1, -1, 7, 1, "#1a1a1a"); Q(1, 0, 3, 1, "#1a1a1a"); Q(5, 0, 1, 2, "#f2c14e"); break;
      case "headphones": Q(0, -1, 5, 1, hc); Q(-1, 0, 1, 3, hc); Q(5, 0, 1, 3, hc); break;
      case "hardhat": Q(1, -1, 3, 1, hc); Q(-1, 0, 7, 1, hc); break;
      case "cap": Q(1, -1, 3, 1, hc); Q(0, 0, 6, 1, hc); break;
      case "pith": Q(1, -2, 3, 1, "#c9b48a"); Q(0, -1, 5, 1, "#c9b48a"); Q(-1, 0, 7, 1, "#b09a70"); break;
      case "headband": Q(0, 1, 5, 1, hc); break;
      case "wig": Q(-1, -1, 7, 2, "#f4f0e6"); Q(-1, 1, 1, 3, "#f4f0e6"); Q(5, 1, 1, 3, "#f4f0e6"); break;
      case "tophat": Q(1, -3, 3, 3, "#1a1a1a"); Q(1, -1, 3, 1, "#c8402f"); Q(-1, 0, 7, 1, "#1a1a1a"); break;
      case "hood": Q(1, -1, 3, 1, hc); Q(0, 0, 5, 1, hc); Q(0, 1, 1, 2, hc); Q(4, 1, 1, 2, hc); break;
      case "laurel": Q(0, 0, 1, 1, "#67ae55"); Q(1, -1, 1, 1, "#67ae55"); Q(3, -1, 1, 1, "#67ae55"); Q(4, 0, 1, 1, "#67ae55"); break;
      case "beret": Q(0, -1, 5, 1, hc); Q(-1, 0, 5, 1, hc); Q(2, -2, 1, 1, hc); break;
      case "chef": Q(0, -3, 5, 3, "#ffffff"); Q(-1, -3, 1, 2, "#ffffff"); Q(5, -3, 1, 2, "#ffffff"); Q(0, 0, 5, 1, "#e6e6ea"); break;
    }
    if (L.glasses === 1) { Q(0, 2, 5, 1, "#1a1a1a"); Q(1, 2, 1, 1, "#a7d0f2"); Q(3, 2, 1, 1, "#a7d0f2"); }
    if (L.glasses === 2) { Q(0, 2, 5, 1, "#1a1a1a"); }
    if (L.visor) Q(0, 2, 5, 1, L.visor);
    if (L.beard) { Q(1, 3, 3, 2, "#f4f0e6"); }
    if (L.tie) Q(2, 3, 1, 3, L.tie);
    switch (L.item) {
      case "scroll": Q(5, 3, 1, 3, "#f4ecd8"); Q(5, 3, 1, 1, "#c9b48a"); break;
      case "hourglass": Q(5, 3, 2, 1, "#c9962a"); Q(5, 4, 2, 1, "#f4e8b0"); Q(5, 5, 2, 1, "#c9962a"); break;
      case "book": Q(5, 4, 2, 2, "#3c6fb0"); Q(5, 4, 1, 2, "#2c4478"); break;
      case "clipboard": Q(5, 3, 2, 3, "#8a6a44"); Q(5, 4, 2, 1, "#f4f0e6"); break;
      case "mic": Q(5, 3, 1, 1, "#8a929c"); Q(5, 4, 1, 2, "#1a1a20"); break;
      case "pointer": Q(5, 4, 1, 1, "#8a6a44"); Q(6, 3, 1, 1, "#8a6a44"); Q(7, 2, 1, 1, "#e2574c"); break;
      case "laptop": Q(5, 4, 2, 1, "#8a929c"); Q(6, 3, 1, 1, "#5cf2c8"); break;
      case "chalk": Q(5, 4, 1, 1, "#f4f0e6"); break;
      case "bolt": Q(6, 2, 1, 1, "#ffd23f"); Q(5, 3, 1, 1, "#ffd23f"); Q(6, 4, 1, 1, "#ffd23f"); Q(5, 5, 1, 1, "#ffd23f"); break;
      case "gavel": Q(5, 3, 2, 1, "#6b4a2b"); Q(5, 4, 1, 2, "#8a6a44"); break;
      case "briefcase": Q(5, 5, 2, 2, "#6b4a2b"); Q(5, 4, 1, 1, "#3a2418"); break;
      case "quill": Q(6, 2, 1, 1, "#ffffff"); Q(5, 3, 1, 2, "#ffffff"); break;
      case "roll": Q(5, 3, 1, 3, "#6fa8dc"); break;
      case "wrench": Q(6, 3, 1, 1, "#aeb4c0"); Q(5, 4, 1, 1, "#aeb4c0"); Q(5, 5, 1, 1, "#aeb4c0"); break;
      case "note": Q(6, 2, 1, 3, "#1a1a1a"); Q(5, 4, 1, 1, "#1a1a1a"); break;
      case "brush": Q(5, 3, 1, 1, "#e2574c"); Q(5, 4, 1, 2, "#8a6a44"); break;
      case "pan": Q(5, 4, 2, 1, "#3a3a42"); Q(7, 4, 1, 1, "#6b4a2b"); break;
      case "ball": Q(5, 5, 2, 2, "#f4e8b0"); Q(6, 5, 1, 1, "#3c6fb0"); break;
    }
  }
