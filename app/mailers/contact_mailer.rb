class ContactMailer < ApplicationMailer

  def contact_message(message)
    @message = message
    mail(:to => 'meneliktucker@hotmail.com', :subject => "Email from your website!")
  end

end