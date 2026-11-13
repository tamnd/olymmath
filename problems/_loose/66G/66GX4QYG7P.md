---
tag: 66GX4QYG7P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178357
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From the relation $a_{2013}=3102$ we obtain that $a_{1}+2012 r=3102$. It is observed that the common difference cannot be anything but $r=1$

$.2 \text{p}$

It follows that $a_{1}=3102-2012=1090$ and we obtain that the general term of the sequence is $a_{n}=n+1089$ $.1 \text{p}$

Let $m$ have the property that $a_{m}=\bar{m}$, we obtain the equality $1089+m=\bar{m}$

It is observed that $m$ cannot have fewer than 4 digits, and not more than 5.

Taking $m=\overline{a b c d}, a \leq d$, we have the equality $\overline{d c b a}-\overline{a b c d}=1089$, from which it follows that $999(d-a)+90(c-b)=1089$ or $111(d-a)+10(c-b)=121 \ldots$

$.2 \text{p}$

The last digit of the left-hand side must be 1, so it must be that $d-a=1, c-b=1$ and we obtain numbers of the form $\overline{a b(b+1)(a+1)}$ with $a \in\{1,2,3,4,5,6,7,8\}$ and $b \in\{0,1,2,3,4,5,6,7,8\}$ For $m=\overline{a b c d e}$ we obtain the equality $\overline{e d c b a}-\overline{a b c d e}=1089 \overline{d c b a}-\overline{a b c d}=1089$, from which it follows that $9999(e-a)+990(d-b)=1089$ or $101(e-a)+10(d-b)=11$. It follows that
$e-a=1$ and $b-d=9$, and $c \in\{0,1,2,3,4,5,6,7,8,9\}$. We obtain that $d=0, b=9$. The numbers sought are of the form $\overline{a 9 c 0(a+1)}$ with $a \in\{1,2,3,4,5,6,7,8\}, c \in\{0,1,2,3,4,5,6,7,8,9\}$. $2 \text{p}$
