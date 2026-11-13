---
tag: WR9J7DNX8R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205917
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two persons, A and B, set up an incantation contest in which they spell incantations (i.e. a finite sequence of letters) alternately. They must obey the following rules:
i) Any incantation can appear no more than once;
ii) Except for the first incantation, any incantation must be obtained by permuting the letters of the last one before it, or deleting one letter from the last incantation before it;
iii)The first person who cannot spell an incantation loses the contest. Answer the following questions:
a) If A says '$STAGEPREIMO$' first, then who will win?
b) Let $M$ be the set of all possible incantations whose lengths (i.e. the numbers of letters in them) are $2009$ and containing only four letters $A,B,C,D$, each of them appearing at least once. Find the first incantation (arranged in dictionary order) in $M$ such that A has a winning strategy by starting with it.
