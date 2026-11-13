---
tag: 6D11VR8XNX
kind: problem
appearances:
  - at: tot/2007-fall/sa7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 64593
    url: https://problems.ru/view_problem_details_new.php?id=64593
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: AI-MO AoPS
    url: https://huggingface.co/datasets/project-numina/aops
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-aops-wiki
    name: AoPS wiki problems
    url: https://artofproblemsolving.com/community/c6h428703p2426225
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228869
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $100$ boxes, each containing either a red cube or a blue cube. Alex has a sum of money initially, and places bets on the colour of the cube in each box in turn. The bet can be anywhere from $0$ up to everything he has at the time. After the bet has been placed, the box is opened. If Alex loses, his bet will be taken away. If he wins, he will get his bet back, plus a sum equal to the bet. Then he moves onto the next box, until he has bet on the last one, or until he runs out of money. What is the maximum factor by which he can guarantee to increase his amount of money, if he knows that the exact number of blue cubes is
[list]**(a)** $1$ ;**(b)** some integer $k$ , $1 < k \leq 100$ .[/list]
