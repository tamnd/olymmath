---
tag: ETHQT1QBX5
kind: problem
type: answer
answer: a = b = c = 0 (and s = 0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=367
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th NMO
---
Find the real numbers $a$, $b$, $c$, with sum $s$, such that
$$
(\sqrt{s} - \sqrt{a})(\sqrt{s} - \sqrt{b}) + (\sqrt{s} - \sqrt{b})(\sqrt{s} - \sqrt{c}) + (\sqrt{s} - \sqrt{c})(\sqrt{s} - \sqrt{a}) = \frac{s}{2}.
$$
