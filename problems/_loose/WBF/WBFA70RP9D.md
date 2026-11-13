---
tag: WBFA70RP9D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=19782
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=86
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo
    source: hf-mathnet
    label: South Africa South-Afrika 2011-2013
---
In triangle $ABC$, the altitude $AD$ is drawn. A circle is tangent to $BC$ at point $D$, intersects side $AB$ at points $M$ and $N$, and side $AC$ at points $P$ and $Q$. Prove that

$$
\frac{A M+A N}{A C}=\frac{A P+A Q}{A B}
$$
