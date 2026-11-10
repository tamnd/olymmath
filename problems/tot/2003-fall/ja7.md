---
tag: 7A9TJZQBX3
kind: problem
appearances:
  - at: tot/2003-fall/ja7
    primary: true
  - at: tot/2003-fall/sa5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65395
    url: https://problems.ru/view_problem_details_new.php?id=65395
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    name: NuminaMath-1.5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players are involved. The first player has 1000 even cards (2, 4, ..., 2000), and the second player has 1001 odd cards (1, 3, ..., 2001). They take turns, with the first player starting. A turn consists of the following: the player whose turn it is lays down one of their cards, and the other player, after looking at it, lays down one of their cards; the player with the higher number on their card scores one point, and both played cards are discarded. In total, there are 1000 turns (one card of the second player is not used). What is the maximum number of points each player can guarantee for themselves (regardless of how their opponent plays)?
