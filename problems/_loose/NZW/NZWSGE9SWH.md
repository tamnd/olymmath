---
tag: NZWSGE9SWH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10931
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187334
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ibero-American_Mathematical_Olympiad/train/0000.parquet#row=95
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2002
    source: hf-numina-olympiads
    label: IberoAmerican_MO
  - at: ibero
    source: hf-mathnet
    label: Ibero-American Mathematical Olympiad Iberoamerican Mathematical Olympiad
---
A game is played on a 2001 x 2001 board as follows. The first player's piece is the policeman, the second player's piece is the robber. Each piece can move one square south, one square east or one square northwest. In addition, the policeman (but not the robber) can move from the bottom right to the top left square in a single move. The policeman starts in the central square, and the robber starts one square diagonally northeast of the policeman. If the policeman moves onto the same square as the robber, then the robber is captured and the first player wins. However, the robber may move onto the same square as the policeman without being captured (and play continues). Show that the robber can avoid capture for at least 10000 moves, but that the policeman can ultimately capture the robber.
