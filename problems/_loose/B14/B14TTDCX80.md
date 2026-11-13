---
tag: B14TTDCX80
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79912
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the equation

$$
a^{5}-2 b^{2}=2021
$$

does not admit any solutions.

Often, reduction modulo $n$ does not allow a direct conclusion, but it can "gain information." For instance, if we obtain that an integer $a$ satisfies $a^{2} \equiv 0 \bmod 4$, this does not imply a contradiction, but we can then set $a=2 \widetilde{a}$ and reinsert it into the equation to continue.

For more details, we refer again to the arithmetic lecture notes of the POFM and the course on modules.
