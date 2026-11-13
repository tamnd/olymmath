---
tag: GSVWQT2DMG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Croatia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2520996
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37328
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2004
    source: hf-ai-mo-aops
    label: 2004 Croatia National Olympiad
---
The sequences $(x_n),(y_n),(z_n),n\in\mathbb N$ , are defined by the relations $$ x_{n+1}=\frac{2x_n}{x_n^2-1}, y_{n+1}=\frac{2y_n}{y_n^2-1}, z_{n+1}=\frac{2z_n}{z_n^2-1}, $$ where $x_1=2$ , $y_1=4$ , and $x_1y_1z_1=x_1+y_1+z_1$ .
(a) Show that $x_n^2\ne1$ , $y_n^2\ne1$ , $z_n^2\ne1$ for all $n$ ;
(b) Does there exist a $k\in\mathbb N$ for which $x_k+y_k+z_k=0$ ?
