---
tag: BR64SGDQQZ
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187273
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10868
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1990
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
$A$ and $B$ are opposite corners of an $n \times n$ board, divided into $n^{2}$ squares by lines parallel to the sides. In each square the diagonal parallel to $\mathrm{AB}$ is drawn, so that the board is divided into $2 \mathrm{n}^{2}$ small triangles. The board has $(n+1)^{2}$ nodes and large number of line segments, each of length 1 or $\sqrt{ } 2$. A piece moves from $\mathrm{A}$ to $\mathrm{B}$ along the line segments. It never moves along the same segment twice and its path includes exactly two sides of every small triangle on the board. For which $\mathrm{n}$ is this possible?
