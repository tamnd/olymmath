---
tag: 960BTCGZKN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ bowls placed at equal intervals along the edge of a round table. Someone plays a game, first choosing a bowl at random and placing a bean in it. Then, he places a bean in the adjacent bowl in the clockwise direction. He continues moving in the clockwise direction, skipping one bowl, and placing a bean in the next bowl. Then he skips two bowls and places a bean in the next bowl. This continues until each bowl contains a bean. The question is: For which positive integers $n$ can he finish the game in a finite number of steps?
