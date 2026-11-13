---
tag: BWA1DK3TQX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f:\mathbb R_{\ge0}\times\mathbb R_{\ge0}\to\mathbb R_{\ge0}$ such that

$1$. $f(x,0)=f(0,x)=x$ for all $x\in\mathbb R_{\ge0}$,
$2$. $f(f(x,y),z)=f(x,f(y,z))$ for all $x,y,z\in\mathbb R_{\ge0}$ and
$3$. there exists a real $k$ such that $f(x+y,x+z)=kx+f(y,z)$ for all $x,y,z\in\mathbb R_{\ge0}$.
