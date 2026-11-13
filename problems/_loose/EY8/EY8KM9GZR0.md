---
tag: EY8KM9GZR0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h2048353
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61161
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Taiwan TST Round 2
---
Alice and Bob want to play a game. In the beginning of the game, they are teleported to two random position on a train, whose length is $ 1 $ km. This train is closed and dark. So they dont know where they are.

Fortunately, both of them have iPhone 133, it displays some information:
1. Your facing direction
2. Your total walking distance
3. whether you are at the front of the train
4. whether you are at the end of the train
Moreover, one may see the information of the other one. Once Alice and Bob meet, the game ends.

Alice and Bob can only discuss their strategy before the game starts. Find the least value $ x $ so that they are guarantee to end the game with total walking distance $ \le x $ km.
