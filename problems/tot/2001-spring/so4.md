---
tag: T4CSN02Y17
kind: problem
appearances:
  - at: tot/2001-spring/so4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98516
    url: https://problems.ru/view_problem_details_new.php?id=98516
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
    url: https://artofproblemsolving.com/community/c6h424965p2404861
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228589
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two persons play a game on a board divided into $3\times 100$ squares. They move in turn: the first places tiles of size $1\times2$ lengthwise (along the long axis of the board), the second, in the perpendicular direction. The loser is the one who cannot make a move. Which of the players can always win (no matter how his opponent plays), and what is the winning strategy?
