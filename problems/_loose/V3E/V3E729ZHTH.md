---
tag: V3E729ZHTH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2537349
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48607
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244520
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Mongolian Mathematical Olympiad
---
Let $n\ge2$ . For any two $n$ -vectors $\vec x=(x_1,\ldots,x_n)$ and $\vec y=(y_1,\ldots,y_n)$ , we define $$ f\left(\vec x,\vec y\right)=x_1\overline{y_1}-\sum_{i=2}^nx_i\overline{y_i}. $$ Prove that if $f\left(\vec x,\vec x\right)\ge0$ , and $f\left(\vec y,\vec y\right)\ge0$ , then $\left|f\left(\vec x,\vec y\right)\right|^2\ge f\left(\vec x,\vec x\right)f\left(\vec y,\vec y\right)$ .
