---
tag: M1FC6GM37P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267018
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
SQUARING OFF: Master Chief and Samus Aran take turns firing rockets at one another from across the Cartesian plane. Master Chief's movement is restricted to lattice points within the $10\times 10$ square with vertices $(0,0)$, $(0,10)$, $(10,0)$, and $(10,10)$, while Samus Aran's movement is restricted to lattice points inside the $10\times 10$ square with vertices $(0,0)$, $(-10,0)$, $(0,-10)$, and $(-10,-10)$. Neither player can be located on or beyond the border of his or her square. Both players randomly choose a lattice point at which they begin the game, and do not move the rest of the game (until either they are killed or kill the other player).

Each player's turn consists of firing a rocket, targeted at a specific undestroyed lattice point inside the border of the opponent's movement square, which hits immediately. When a rocket hits its intended lattice point, it explodes, destroying the surrounding $3\times 3$ square ($8$ additional adjacent lattice points).

The game ends when one player is hit by a rocket (when the player is located within the $3\times 3$ grid hit by a rocket). If the highest possible probability that Samus Aran wins the game in three turns or less, assuming Master Chief goes first, is expressed as $a/b$, where $a$ and $b$ are relatively prime integers, find $a+b$.
