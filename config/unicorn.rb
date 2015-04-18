worker_processes 2
working_directory "var/www/narcissism"
listen "/tmp/unicorn.[narcissism].sock"
listen "/tmp/unicorn.narcissism.sock", :backlog => 64
listen 8080, :tcp_nopush => true
timeout 30
pid "var/www/narcissism/tmp/pids/unicorn.pid"
stderr_path "var/www/narcissism/log/unicorn.stderr.log"
stdout_path "var/www/narcissism/log/unicorn.stdout.log"
