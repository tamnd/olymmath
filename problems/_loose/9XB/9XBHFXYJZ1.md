---
tag: 9XBHFXYJZ1
kind: problem
type: answer
answer: (1/3,1/3,1/3),(0,0,1),(0,1,0),(2/3,-1/3,2/3),(1,0,0),(-1,1,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86174
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain FASE LOCAL DE LA OLIMPIADA MATEMÁTICA ESPAÑOLA.
---
Determine all real values of $(x, y, z)$ for which

$$
\begin{array}{cccc}
x+y+z & = & 1 \\
x^{2} y+y^{2} z+z^{2} x & = & x y^{2}+y z^{2}+z x^{2} \\
x^{3}+y^{2}+z & = & y^{3}+z^{2}+x
\end{array}
$$
