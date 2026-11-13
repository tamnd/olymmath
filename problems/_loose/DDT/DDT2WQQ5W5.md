---
tag: DDT2WQQ5W5
kind: problem
type: answer
answer: a) Yes. b) No; for example, zero, one, two, and four.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) There are three numbers $a$, $b$, $c$ such that $a \le b \le c$. Let $p$, $q$, $r$ be the pairwise sums $a+b$, $b+c$, $c+a$ in the order such that $p \le q \le r$. Given that $r-q = q-p$, is it certainly true that $c-b = b-a$?

b) There are four numbers $e$, $f$, $g$, $h$ such that $e \le f \le g \le h$. Let $u$, $v$, $w$, $x$, $y$, $z$ be the pairwise sums of those numbers, in the order $u \le v \le w \le x \le y \le z$. Given that $z-y = y-x = x-w = w-v = v-u$, is it certainly true that $h-g = g-f = f-e$?
