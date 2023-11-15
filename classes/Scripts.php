<?php
namespace Miyazakifarm_Theme;

trait Scripts {
  // CSS, JSファイルを読み込み
  public static function enqueue_scripts() {
    // バージョン情報を取得
		$version = wp_get_theme()->get( 'Version' );

		// Google Fonts
    $family = 'family=Kiwi+Maru&family=Noto+Sans+JP:wght@400;700&family=Sawarabi+Mincho';
    if ($family !== '') {
      wp_enqueue_style('fonts', 'https://fonts.googleapis.com/css2?' . $family . '&display=swap', [], null); 
    }

		// style.css
		wp_enqueue_style(
			'style',
			get_template_directory_uri() . '/style.css',
			[],
			$version
		);

		// init.js
		wp_enqueue_script(
			'init',
			get_template_directory_uri() . '/init.js',
			[],
			$version,
			true
		);

  }

}
