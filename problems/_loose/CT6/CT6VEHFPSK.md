---
tag: CT6VEHFPSK
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184697
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If a real number $a$ is given, then each real number $x$ is assigned a number $y$, namely

$$
y=\frac{x^{3}+x^{2}+a x+1}{x^{2}+1}
$$

(A) Determine, if $a=-3$ is given, two integers $x$ whose assigned numbers $y$ are also integers!

(B) Determine a real number $a$ for which the following statement (*) holds!

(*) If the number $a$ is given, then there are infinitely many integers $x$ whose respective assigned numbers $y$ are also integers.

(C) Investigate whether there is any other real number $a$ besides the one determined in (B) for which the statement (*) holds!
