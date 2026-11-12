---
tag: 4NGAZA21G9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's find the time Anya spent.

Consider some sequence of elevator movements that will bring her to the 11th floor.

(1) $-+9-(10)-5-(5)-+9-(14)--5-(9)-+9-(18)--5-(13)--5-(8)-+9-(17)$ $--5-(12)--5--(7)--5-(2)-+9-(11)$

(In parentheses, the floor number to which the elevator has arrived is indicated)

Notice that the 11th floor can only be reached by a sequence of moves where the total number of floors traveled is +10. Since we can only travel 9 floors up (+9) or 5 floors down (-5), such a sequence must contain 5 upward moves (+5 x 9) and 7 downward moves (-7 x 5). The number of upward and downward moves does not depend on their sequence (it is an invariant). That is, $5 \times 9 - 7 \times 5 = 10$.

In this case, Anya will travel $45 + 35 = 80$ floors (up and down). In total, she spent $80 \times 3 = 240$ seconds on this.

Anya spent 240 seconds, and Vanya also spent 240 seconds climbing.
