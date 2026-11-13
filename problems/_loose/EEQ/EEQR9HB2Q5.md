---
tag: EEQR9HB2Q5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=62
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia 46th Mongolian Mathematical Olympiad
---
If $a_i \ge 0$, prove that
$$
\frac{n(n+1)}{2} \left( \prod_{i=1}^{n} A_i^i \right)^{\frac{2}{n(n+1)}} \ge \frac{n(n-1)}{2} \left( \prod_{i=1}^{n-1} A_i^i \right)^{\frac{2}{n(n-1)}} + nG_n,
$$
where $A_k = \sum_{i=1}^{k} \frac{2ia_i}{k(k+1)}$, $G_k = \left( \prod_{i=1}^{k} a_i^i \right)^{\frac{2}{k(k+1)}}$.
