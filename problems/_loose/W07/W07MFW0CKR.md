---
tag: W07MFW0CKR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=401
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2023
    source: hf-mathnet
    label: Baltic Way Baltic Way 2023 Shortlist
---
Let $k$ be a non-negative integer and let $A$ be a nonempty finite set. We define a word from the alphabet $A$ of length $k$ as a sequence of elements of $A$ of length $k$. (Notice that by definition the empty sequence is a word of length $0$.)

* Let $B$ be the set of all words from the nine-element alphabet $\{b, @, l, t, i, c, w, a, y\}$, whose lengths are at most $2023$.
* Moreover, let $M$ be the set of all words from the four-element alphabet $\{m, a, t, h\}$, whose lengths are at most $2025$ and which contain the element $t$ exactly twice.
(For example, $tata \in M$, because it has length $4$ and contains the letter $t$ twice, but $mahatma \notin M$, because it contains the letter $t$ only once.)

Prove that the difference $|B| - |M|$ is divisible by $3^{2023}$.
