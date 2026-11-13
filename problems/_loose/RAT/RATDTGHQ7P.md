---
tag: RATDTGHQ7P
kind: problem
type: answer
answer: A=48,B=56,C=35
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$A, B, C$ and $D$ are mathematicians. $D$ asks the others - one of whom is quite amused - about their ages. They decide to share the data determining their ages in a number system different from the decimal system.

$A$ says: "Take four numbers, each differing from the next by 2. Write the smallest followed by the next. The resulting two-digit number in a certain number system gives my age; and this is the same as the product of the two largest numbers."

- Now $B$ states that his age can be found by writing two consecutive numbers side by side (starting with the smaller one), and considering this number as a two-digit number in a number system whose value is exactly the product of the next two consecutive numbers.
- Finally, $C$, the youngest, declares that he can say the same about his age as $A$ did about his own.

$D$ can now determine the ages of $A, B$, and $C$, and also which one of them has an amusing nature.

Determine what it is!
