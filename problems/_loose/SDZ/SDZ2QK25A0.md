---
tag: SDZ2QK25A0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8848
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a virtual computer state, there are no fewer than two cities. Some pairs of cities are connected by roads, and from each city, it is possible to travel by roads to any other city (here and below, switching from one road to another is only allowed in cities). If, at the same time, it is possible to start moving from some city and, without passing twice along the same road, return to this city, the state is called complex; otherwise, it is called simple. Petya and Vasya play such a game. At the beginning of the game, Petya indicates the direction in which one can move along each road and places a tourist in one of the cities. Then, on his turn, Petya moves the tourist along a road in the allowed direction to a neighboring city, and Vasya, in response, changes the direction of one of the roads entering or exiting the city where the tourist arrived. Vasya wins if at some point Petya cannot make a move. Prove that

a) [5] in a simple state, Petya can play in such a way as to not lose, no matter how Vasya plays;

b) [7] in a complex state, Vasya can guarantee himself a win, no matter how Petya plays.
