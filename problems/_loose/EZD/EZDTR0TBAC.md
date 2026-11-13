---
tag: EZDTR0TBAC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Jeck and Lisa are playing a game on an $m \times n$ board, with $m, n>2$. Lisa starts by putting a knight onto the board. Then in turn Jeck and Lisa put a new piece onto the board according to the following rules:

1. Jeck puts a queen on an empty square that is two squares horizontally and one square vertically, or alternatively one square horizontally and two squares vertically, away from Lisa's last knight.
2. Lisa puts a knight on an empty square that is on the same, row, column or diagonal as Jeck's last queen.

The one who is unable to put a piece on the board loses the game. For which pairs $(m, n)$ does Lisa have a winning strategy?

(Stijn Cambie)
