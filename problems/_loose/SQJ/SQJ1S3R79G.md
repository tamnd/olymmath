---
tag: SQJ1S3R79G
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=395
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th Romanian Mathematical Olympiad
---
Let $(a_n)_{n \ge 1}$ be the sequence defined by $a_1 = 1$ and $a_{n+1} = \frac{a_n}{1+\sqrt{1+a_n}}$, for any $n \in \mathbb{N}^*$. Show that $\lim_{n \to \infty} \frac{a_n}{a_{n+1}} = \lim_{n \to \infty} \sum_{k=1}^{n} \log_2(1+a_k) = 2$. Traian Tămâian
