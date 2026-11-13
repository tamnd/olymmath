---
tag: 1YBGFQTBAH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst
    source: hf-mathnet
    label: Romania 66th NMO SELECTION TESTS FOR THE BALKAN AND INTERNATIONAL MATHEMATICAL OLYMPIADS
---
Let $k$ be a positive integer congruent to $1$ modulo $4$ which is not a perfect square, and let $a = (1 + \sqrt{k})/2$. Show that
$$
\{\lfloor a^2 n \rfloor - \lfloor a \lfloor an \rfloor \rfloor : n = 1, 2, 3, \dots\} = \{1, \dots, \lfloor a \rfloor\}.
$$
