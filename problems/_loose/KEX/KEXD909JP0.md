---
tag: KEXD909JP0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=301
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 74th Romanian Mathematical Olympiad
---
Let $x_0$ be a real number. Prove that there exists a useful function $f$ so that $f(x_0) = 0$ if and only if $|x_0| \ge 4$.

We will call an affine function $f : \mathbb{R} \to \mathbb{R}$ *useful* if it has the properties:
(i) $|f(x)| \le 2$, for every real number $x$ such that $|x| \le 2$;
(ii) $|f(x)| \ge 1$, for every real number $x$ such that $|x| \le 1$.
