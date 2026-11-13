---
tag: 9T0FYBGDAV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224013
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F_{n}$ be the $n-$ th Fibonacci number (where $F_{1}= F_{2}= 1$). Consider the functions
$f_{n}(x)=\parallel . . . \parallel |x|-F_{n}|-F_{n-1}|-...-F_{2}|-F_{1}|, g_{n}(x)=| . . . \parallel x-1|-1|-...-1|$ ($F_{1}+...+F_{n}$ one's).
Show that $f_{n}(x) = g_{n}(x)$ for every real number $x.$
