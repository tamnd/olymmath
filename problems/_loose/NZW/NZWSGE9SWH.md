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
status:
  statement: captured
unplaced:
  - at: ibero/2002
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
A game is played on a 2001 x 2001 board as follows. The first player's piece is the policeman, the second player's piece is the robber. Each piece can move one square south, one square east or one square northwest. In addition, the policeman (but not the robber) can move from the bottom right to the top left square in a single move. The policeman starts in the central square, and the robber starts one square diagonally northeast of the policeman. If the policeman moves onto the same square as the robber, then the robber is captured and the first player wins. However, the robber may move onto the same square as the policeman without being captured (and play continues). Show that the robber can avoid capture for at least 10000 moves, but that the policeman can ultimately capture the robber.
