class PageController < ApplicationController

  def portfolio
    render component: 'Portfolio'
  end

  def contact
    ContactMailer.contact_message(params[:message]).deliver
    render nothing: true
  end
  
end
