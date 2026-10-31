#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/f1c0ae3cce3d84a16d907f97c0d1db4f66111eb0e68d399a1852ec7336bc7deb/contract';
import startContract from '../../snapshots/f1c0ae3cce3d84a16d907f97c0d1db4f66111eb0e68d399a1852ec7336bc7deb/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/f480c00ca7f11194d1348d1764da734e4ea7f21636687279f9cdb1a473355cf0/contract';
import endContract from '../../snapshots/f480c00ca7f11194d1348d1764da734e4ea7f21636687279f9cdb1a473355cf0/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, lit, placeholder } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'User',
        column: col('role', 'text', {
          notNull: true,
          default: lit('USER'),
          codecRef: { codecId: 'pg/text@1' },
        }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'User',
        column: col('name', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.dataTransform(endContract, 'backfill-User-name', {
        check: () => placeholder('backfill-User-name:check'),
        run: () => placeholder('backfill-User-name:run'),
      }),
      this.setNotNull({ schema: 'public', table: 'User', column: 'name' }),
      this.addCheckConstraint({
        schema: 'public',
        table: 'User',
        constraint: 'User_role_check_dd4f67c2',
        expression: "\"role\" IN ('USER', 'DRIVER', 'ADMIN')",
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
