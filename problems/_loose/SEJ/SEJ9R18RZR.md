---
tag: SEJ9R18RZR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137619
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 76th question: n books, numbered $1, 2, \ldots, n$, are arranged in a row (the initial order is random). The librarian wants to sort them in the correct order (from left to right, $1, 2, \ldots, n$). Each time, he selects a book that is to the right of its correct position and inserts it into the correct position. For example, if $n=4$, and the four books are in the order $1, 3, 2, 4$, the librarian can move the book numbered 2 to the 2nd position, resulting in the order $1, 2, 3, 4$. Prove:
(1) Regardless of the order of operations, as long as the operations continue, all books can definitely be arranged in the correct order;
(2) What is the maximum number of steps he can take?

---

(1) Regardless of the order of operations, as long as the operations continue, all books can definitely be arranged in the correct order;
(2) What is the maximum number of steps he can take?
