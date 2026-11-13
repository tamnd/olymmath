---
tag: FJ9XTX6WDD
kind: problem
type: answer
answer: S
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Robot "Mag-o-matic" manipulates $101$ glasses, displaced in a row whose positions are numbered from $1$ to $101$. In each glass you can find a ball or not. Mag-o-matic only accepts elementary instructions of the form $(a;b,c)$, which it interprets as
"consider the glass in position $a$: if it contains a ball, then switch the glasses in positions $b$ and $c$ (together with their own content), otherwise move on to the following instruction"
(it means that $a, b, c$ are integers between $1$ and $101$, with $b$ and $c$ different from each other but not necessarily different from $a$). A $\emph{programme}$ is a finite sequence of elementary instructions, assigned at the beginning, that Mag-o-matic does one by one.
A subset $S\subseteq \{0, 1, 2,\dots, 101\}$ is said to be $\emph{identifiable}$ if there exists a programme which, starting from any initial configuration, produces a final configuration in which the glass in position $1$ contains a ball if and only if the number of glasses containing a ball is an element of $S$.
(a) Prove that the subset $S$ of the odd numbers is identifiable.
(b) Determine all subsets $S$ that are identifiable.
