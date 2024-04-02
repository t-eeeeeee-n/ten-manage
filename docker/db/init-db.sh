#!/bin/bash
# init-db.sh

# pg_hba.confをデータディレクトリにコピー
cp ./docker/db/config/pg_hba.conf /var/lib/postgresql/data/pg_hba.conf

# PostgreSQLのオリジナルエントリポイントスクリプトを実行
exec docker-entrypoint.sh postgres