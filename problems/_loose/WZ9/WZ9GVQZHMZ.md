---
tag: WZ9GVQZHMZ
kind: problem
type: answer
answer: (6,2,1,0,0,0,1,0,0,0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vicky starts with a list $(a, b, c, d)$ of four digits. Each digit is $0,1,2$, or 3 . Vicky enters the list into a machine to produce a new list $(w, x, y, z)$. In the new list, $w$ is the number of $0 \mathrm{~s}$ in the original list, while $x, y$ and $z$ are the numbers of $1 \mathrm{~s}, 2 \mathrm{~s}$ and $3 \mathrm{~s}$, respectively, in the original list. For example, if Vicky enters $(1,3,0,1)$, the machine produces $(1,2,0,1)$.
(a) What does the machine produce when Vicky enters $(2,3,3,0)$ ?
(b) Vicky enters $(a, b, c, d)$ and the machine produces the identical list $(a, b, c, d)$. Determine all possible values of $b+2 c+3 d$.
(c) Determine all possible lists $(a, b, c, d)$ with the property that when Vicky enters $(a, b, c, d)$, the machine produces the identical list $(a, b, c, d)$.
(d) Vicky buys a new machine into which she can enter a list of ten digits. Each digit is $0,1,2,3,4,5,6,7,8$, or 9 . The machine produces a new list whose entries are, in order, the numbers of $0 \mathrm{~s}, 1 \mathrm{~s}, 2 \mathrm{~s}, 3 \mathrm{~s}, 4 \mathrm{~s}, 5 \mathrm{~s}, 6 \mathrm{~s}, 7 \mathrm{~s}, 8 \mathrm{~s}$, and $9 \mathrm{~s}$ in the original list. Determine all possible lists, $L$, of ten digits with the property that when Vicky enters $L$, the machine produces the identical list $L$.
