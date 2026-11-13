---
tag: 17JNVRAVY2
kind: problem
type: answer
answer: "-22"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154640
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 20th Philippine Mathematical Olympiad
---
Suppose that $\log _{a} 125=\log _{5} 3$ and $\log _{b} 16=\log _{4} 7$. Find the value of $a^{\left(\log _{5} 3\right)^{2}}-b^{\left(\log _{4} 7\right)^{2}}$.
