---
tag: NFXEV2JJ53
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Romanian Mathematical Olympiad
---
Show that there exist a sequence $(a_n)_{n \ge 0}$, with $a_n \in \{-1, +1\}$ for all $n \ge 0$, such that
$$
\lim_{n \to \infty} (\sqrt{n+a_1} + \sqrt{n+a_2} + \dots + \sqrt{n+a_n} - n\sqrt{n+a_0}) = \frac{1}{2}.
$$
